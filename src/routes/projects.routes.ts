import { Router } from "express";
import { isDbConfigured } from "../config/env.js";
import { connectDB } from "../config/db.js";
import { ProjectModel } from "../models/Project.js";
import { projects as fallbackProjects } from "../data/portfolio.js";
import {
  getProjects,
  getProjectById,
  toProject,
} from "../services/projectService.js";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/error.js";

const router = Router();

const DB_NOT_CONFIGURED = {
  error: "MONGODB_URI is not configured. Add it to the backend .env first.",
};

// GET /api/projects — list projects (DB or static fallback).
router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const result = await getProjects();
    res.json(result);
  })
);

// POST /api/projects/seed — import the built-in static projects when empty.
router.post(
  "/seed",
  requireAuth,
  asyncHandler(async (_req, res) => {
    if (!isDbConfigured()) {
      res.status(503).json(DB_NOT_CONFIGURED);
      return;
    }
    await connectDB();
    const count = await ProjectModel.estimatedDocumentCount();
    if (count > 0) {
      res
        .status(409)
        .json({ error: "Database already has projects — seed skipped." });
      return;
    }
    await ProjectModel.insertMany(fallbackProjects);
    res.json({ ok: true, inserted: fallbackProjects.length });
  })
);

// GET /api/projects/:id — single project (DB or static fallback).
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const project = await getProjectById(req.params.id);
    if (!project) {
      res.status(404).json({ error: "Project not found." });
      return;
    }
    res.json({ project });
  })
);

// POST /api/projects — create a project.
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    if (!isDbConfigured()) {
      res.status(503).json(DB_NOT_CONFIGURED);
      return;
    }
    const body = req.body;
    if (!body?.title) {
      res.status(400).json({ error: "Title is required." });
      return;
    }

    // Slug from title if not provided.
    const id: string =
      body.id?.trim() ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    await connectDB();
    const existing = await ProjectModel.findOne({ id });
    if (existing) {
      res
        .status(409)
        .json({ error: `A project with slug "${id}" already exists.` });
      return;
    }
    const doc = await ProjectModel.create({ ...body, id });
    res.status(201).json({ project: toProject(doc.toObject()) });
  })
);

// PUT /api/projects/:id — update (upsert) a project.
router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    if (!isDbConfigured()) {
      res.status(503).json(DB_NOT_CONFIGURED);
      return;
    }
    const { id } = req.params;
    const body = req.body;
    if (!body) {
      res.status(400).json({ error: "Invalid request body." });
      return;
    }
    await connectDB();
    const doc = await ProjectModel.findOneAndUpdate(
      { id },
      { ...body, id: body.id?.trim() || id },
      { returnDocument: "after", upsert: true, setDefaultsOnInsert: true }
    ).lean();
    res.json({ project: toProject(doc) });
  })
);

// DELETE /api/projects/:id — delete a project.
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    if (!isDbConfigured()) {
      res.status(503).json(DB_NOT_CONFIGURED);
      return;
    }
    await connectDB();
    const doc = await ProjectModel.findOneAndDelete({ id: req.params.id });
    if (!doc) {
      res.status(404).json({ error: "Project not found." });
      return;
    }
    res.json({ ok: true });
  })
);

export default router;
