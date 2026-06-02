import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scanPasswordImplementation } from "./password-implementation-scanner";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/password-implementation-scan", async (req, res, next) => {
    try {
      const url = typeof req.body?.url === "string" ? req.body.url : "";

      if (!url.trim()) {
        return res.status(400).json({ message: "A URL is required." });
      }

      const result = await scanPasswordImplementation(url);
      return res.json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to scan that URL.";
      return res.status(400).json({ message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
