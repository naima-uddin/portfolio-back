import { Router } from "express";
import multer from "multer";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isCloudinaryConfigured } from "../config/env.js";
import { uploadToCloudinary, EXT } from "../utils/cloudinary.js";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/error.js";

const router = Router();

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "application/pdf",
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_BYTES },
});

export const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// Saves to the local /uploads folder (served statically at /uploads).
async function saveLocally(
  buffer: Buffer,
  mimeType: string,
  originalName: string
): Promise<string> {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const base =
    (originalName || "file")
      .replace(/\.[^.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "file";
  const ext = EXT[mimeType] ?? "bin";
  const filename = `${base}-${Date.now()}.${ext}`;
  await writeFile(path.join(UPLOAD_DIR, filename), buffer);
  return `/uploads/${filename}`;
}

// POST /api/upload — store an uploaded file and return its URL.
// Uses Cloudinary when configured; otherwise the local /uploads folder.
router.post(
  "/",
  requireAuth,
  upload.single("file"),
  asyncHandler(async (req, res) => {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: "No file provided." });
      return;
    }
    if (!ALLOWED.has(file.mimetype)) {
      res
        .status(415)
        .json({ error: `Unsupported file type: ${file.mimetype || "unknown"}.` });
      return;
    }

    const url = isCloudinaryConfigured()
      ? await uploadToCloudinary(file.buffer, file.mimetype, file.originalname)
      : await saveLocally(file.buffer, file.mimetype, file.originalname);

    // Local URLs are relative to this API host — make them absolute so the
    // frontend (a different origin) can load them.
    const absolute = url.startsWith("/")
      ? `${req.protocol}://${req.get("host")}${url}`
      : url;

    res.status(201).json({ url: absolute });
  })
);

export default router;
