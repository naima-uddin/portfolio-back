import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env, isDbConfigured } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import contentRoutes from "./routes/content.routes.js";
import uploadRoutes, { UPLOAD_DIR } from "./routes/upload.routes.js";
import { notFound, errorHandler } from "./middleware/error.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.corsOrigins,
      credentials: true,
    })
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());

  // Locally-stored uploads (when Cloudinary is not configured).
  app.use("/uploads", express.static(UPLOAD_DIR));

  // Health check.
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, dbConfigured: isDbConfigured() });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/projects", projectRoutes);
  app.use("/api/content", contentRoutes);
  app.use("/api/upload", uploadRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
