import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import dotenv from "dotenv";
import { db, collection, addDoc, getDocs, query, where, orderBy, Timestamp, doc, updateDoc } from './src/firebase.ts';

dotenv.config();

// Handle __dirname and __filename in both ESM and CJS environments
let _filename: string;
let _dirname: string;

try {
  // @ts-ignore - this is available in ESM
  if (typeof import.meta !== 'undefined' && import.meta.url) {
    _filename = fileURLToPath(import.meta.url);
    _dirname = path.dirname(_filename);
  } else {
    // @ts-ignore - this is available in CJS
    _filename = __filename;
    // @ts-ignore - this is available in CJS
    _dirname = __dirname;
  }
} catch (e) {
  _dirname = process.cwd();
  _filename = path.join(_dirname, 'server.ts');
}

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // Health check for deployment monitoring
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV });
  });

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

  // Optimized SPA fallback and static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    
    app.get("*", async (req, res, next) => {
      // Ignore API routes and file requests
      if (req.path.startsWith('/api') || req.path.includes('.')) {
        return next();
      }

      try {
        const url = req.originalUrl;
        const indexHtml = await fs.readFile(path.resolve(_dirname, 'index.html'), 'utf-8');
        const template = await vite.transformIndexHtml(url, indexHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        if (e instanceof Error) vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const staticPath = path.resolve(_dirname);
    const indexPath = path.join(staticPath, "index.html");

    // Serve static files first
    app.use(express.static(staticPath, { index: false }));
    
    // Fallback for all other routes to serve index.html
    app.get("*", (req, res, next) => {
      // Ignore API routes and file requests that weren't caught by express.static
      if (req.path.startsWith('/api') || req.path.includes('.')) {
        return next();
      }
      res.sendFile(indexPath);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
