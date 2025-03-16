import type { Express } from "express";
import { createServer, type Server } from "http";
import { sql } from "drizzle-orm";
import { storage } from "./storage";
import { categories, blogPosts } from "../shared/schema";
import multer from "multer";
import path from "path";

const upload = multer({ dest: 'uploads/' });

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/blog", async (req, res) => {
    try {
      const blogData = req.body;
      const slug = blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const blog = await storage.db.insert(blogPosts).values({
        ...blogData,
        slug,
        authorId: 1 // TODO: Get from authenticated user
      }).returning();
      res.json(blog[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.db.select().from(blogPosts)
        .where(eq(blogPosts.published, true))
        .orderBy(desc(blogPosts.createdAt));
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Category name is required" });
      }
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const category = await storage.db.insert(categories).values({
        name,
        slug
      }).returning();
      res.json(category[0]);
    } catch (error) {
      console.error('Category creation error:', error);
      res.status(500).json({ error: error.message || "Failed to create category" });
    }
  });

  app.post("/api/upload", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      // Store file in uploads directory and return URL
      const fileName = `${Date.now()}-${path.basename(req.file.originalname)}`;
      const filePath = path.join('uploads', fileName);
      res.json({ url: `/uploads/${fileName}` });
    } catch (error) {
      res.status(500).json({ error: "Failed to upload file" });
    }
  });

  app.get("/api/categories", async (req, res) => {
    try {
      const allCategories = await storage.db.select().from(categories);
      res.json(allCategories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
