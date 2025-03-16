import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const category = await storage.db.insert(categories).values({
        name,
        slug
      }).returning();
      res.json(category[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to create category" });
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
