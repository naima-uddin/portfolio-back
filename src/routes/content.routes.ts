import { Router } from "express";
import { isDbConfigured } from "../config/env.js";
import { getSiteContent, saveSiteContent } from "../services/siteContentService.js";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/error.js";

const router = Router();

// GET /api/content — current site content (DB-merged or built-in defaults).
router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const content = await getSiteContent();
    res.json({ content, dbConfigured: isDbConfigured() });
  })
);

// PUT /api/content — replace the stored site content.
router.put(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    if (!isDbConfigured()) {
      res.status(503).json({
        error: "MONGODB_URI is not configured. Add it to the backend .env first.",
      });
      return;
    }
    const body = req.body;
    if (!body || typeof body !== "object") {
      res.status(400).json({ error: "Invalid request body." });
      return;
    }
    await saveSiteContent(body);
    res.json({ ok: true });
  })
);

export default router;
