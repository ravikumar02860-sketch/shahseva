import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { db, collection, addDoc, getDocs, query, where, orderBy, Timestamp, doc, updateDoc } from './src/firebase.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // API to handle donation details
  app.post("/api/donate", async (req, res) => {
    const { name, phone, email, amount, campaignId } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, 'donors'), {
        name,
        phone,
        email: email || null,
        amount: Number(amount),
        campaignId: campaignId || null,
        timestamp: Timestamp.now(),
        emailedInBatch: false
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error processing donation:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/confirm-payment", async (req, res) => {
    const { name, phone, amount, campaignId } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Simulate SMS confirmation
      console.log(`Donation confirmation for ${name} (${phone}) for ₹${amount}`);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending SMS:", error);
      res.status(500).json({ error: "Failed to send SMS" });
    }
  });

  // Campaign Management APIs
  app.get("/api/campaigns", async (req, res) => {
    try {
      const q = query(collection(db, 'campaigns'), where('active', '==', true), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const campaignsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json(campaignsData);
    } catch (err) {
      console.error('Failed to fetch campaigns', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post("/api/campaigns", async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    
    try {
      const docRef = await addDoc(collection(db, 'campaigns'), {
        title,
        description,
        active: true,
        createdAt: Timestamp.now()
      });
      res.json({ id: docRef.id, title, description });
    } catch (err) {
      console.error('Failed to create campaign', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.delete("/api/campaigns/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await updateDoc(doc(db, 'campaigns', id), {
        active: false
      });
      res.json({ success: true });
    } catch (err) {
      console.error('Failed to delete campaign', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.APP_URL || "https://shahseva.vercel.app";
    const pages = [
      "",
      "/about",
      "/work",
      "/donate",
      "/impact",
      "/gallery",
      "/contact",
      "/istikhara",
      "/privacy",
      "/terms",
      "/faq",
      "/volunteer"
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
