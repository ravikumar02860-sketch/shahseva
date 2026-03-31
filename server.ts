import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import nodemailer from "nodemailer";
import * as XLSX from "xlsx";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("donors.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS campaigns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS donors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    amount REAL NOT NULL,
    campaign_id INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    emailed_in_batch INTEGER DEFAULT 0,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
  );
`);

// Migration: Add campaign_id column if it doesn't exist
try {
  db.exec("ALTER TABLE donors ADD COLUMN campaign_id INTEGER");
} catch (e) {}

// Add email column if it doesn't exist (for existing databases)
try {
  db.exec("ALTER TABLE donors ADD COLUMN email TEXT");
} catch (e) {
  // Column already exists or other error
}

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // Email Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Twilio Client
  let twilioClient: any = null;
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  // API to handle donation details
  app.post("/api/donate", async (req, res) => {
    const { name, phone, email, amount, campaignId } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Save to database
      const insert = db.prepare("INSERT INTO donors (name, phone, email, amount, campaign_id) VALUES (?, ?, ?, ?, ?)");
      insert.run(name, phone, email, amount, campaignId || null);

      // Get campaign title if exists
      let campaignTitle = "";
      if (campaignId) {
        const campaign = db.prepare("SELECT title FROM campaigns WHERE id = ?").get(campaignId) as any;
        if (campaign) campaignTitle = campaign.title;
      }

      // Send immediate email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || "Darveshwelfares@gmail.com",
        subject: `New Donation Received: ₹${amount}`,
        text: `A new donation has been recorded.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nAmount: ₹${amount}\nCampaign: ${campaignTitle || 'General'}\nTime: ${new Date().toLocaleString()}`,
      };

      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(adminMailOptions);

        // Send thank you email to donor if email provided
        if (email) {
          const donorMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank You for Your Donation - Dargah Saiyad Ali Shah Seva Sansthan`,
            text: `Dear ${name},\n\nThank you so much for your generous donation of ₹${amount}.\n\nYour support helps us continue our mission of helping poor families and providing education and healthcare to those in need.\n\nDonation Details:\nAmount: ₹${amount}\nDate: ${new Date().toLocaleString()}\n\nWarm regards,\nDargah Saiyad Ali Shah Seva Sansthan`,
          };
          await transporter.sendMail(donorMailOptions);
        }
      } else {
        console.log("Email credentials not set. Skipping emails.");
      }

      // Check for batch of 10
      const unbatched = db.prepare("SELECT * FROM donors WHERE emailed_in_batch = 0").all() as any[];
      
      if (unbatched.length >= 10) {
        const allDonors = db.prepare("SELECT * FROM donors").all() as any[];
        
        // Generate Excel
        const worksheet = XLSX.utils.json_to_sheet(allDonors);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Donors");
        const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

        const batchMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.RECEIVER_EMAIL || "Darveshwelfares@gmail.com",
          subject: "Donor Report: 10 New Donations Recorded",
          text: "Please find attached the updated list of all donors.",
          attachments: [
            {
              filename: "donors_report.xlsx",
              content: excelBuffer,
            },
          ],
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
          await transporter.sendMail(batchMailOptions);
          // Mark as batched
          db.prepare("UPDATE donors SET emailed_in_batch = 1 WHERE emailed_in_batch = 0").run();
        } else {
          console.log("Email credentials not set. Skipping batch email.");
        }
      }

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

    let campaignTitle = "";
    if (campaignId) {
      const campaign = db.prepare("SELECT title FROM campaigns WHERE id = ?").get(campaignId) as any;
      if (campaign) campaignTitle = campaign.title;
    }

    try {
      if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
        const campaignMsg = campaignTitle ? ` for ${campaignTitle}` : "";
        await twilioClient.messages.create({
          body: `Dear ${name}, thank you for your generous donation of ₹${amount}${campaignMsg} to Dargah Saiyad Ali Shah Seva Sansthan. Your support helps us serve the needy. Date: ${new Date().toLocaleDateString()}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone.startsWith('+') ? phone : `+91${phone}`, // Assuming India as default if no code
        });
        console.log(`SMS sent to ${phone}`);
      } else {
        console.log("Twilio credentials not set. Skipping SMS.");
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending SMS:", error);
      res.status(500).json({ error: "Failed to send SMS" });
    }
  });

  // Campaign Management APIs
  app.get("/api/campaigns", (req, res) => {
    const campaigns = db.prepare("SELECT * FROM campaigns WHERE active = 1 ORDER BY created_at DESC").all();
    res.json(campaigns);
  });

  app.post("/api/campaigns", (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    
    const insert = db.prepare("INSERT INTO campaigns (title, description) VALUES (?, ?)");
    const result = insert.run(title, description);
    res.json({ id: result.lastInsertRowid, title, description });
  });

  app.delete("/api/campaigns/:id", (req, res) => {
    const { id } = req.params;
    db.prepare("UPDATE campaigns SET active = 0 WHERE id = ?").run(id);
    res.json({ success: true });
  });

  // Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.APP_URL || "https://dargahsaiyadali.org";
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
