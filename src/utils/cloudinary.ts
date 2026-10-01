import { createHash } from "crypto";
import { env } from "../config/env.js";

export const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "application/pdf": "pdf",
};

// Signed upload to Cloudinary via its REST API (no SDK needed). Returns the
// delivery URL.
export async function uploadToCloudinary(
  buffer: Buffer,
  mimeType: string,
  originalName: string
): Promise<string> {
  const cloud = env.cloudinary.cloudName!;
  const apiKey = env.cloudinary.apiKey!;
  const apiSecret = env.cloudinary.apiSecret!;

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const folder = "portfolio";

  // Signature = sha1 of signable params (alphabetical, joined by &) + secret.
  const toSign = `folder=${folder}&timestamp=${timestamp}`;
  const signature = createHash("sha1")
    .update(toSign + apiSecret)
    .digest("hex");

  const blob = new Blob([new Uint8Array(buffer)], { type: mimeType });
  const form = new FormData();
  form.append("file", blob, originalName);
  form.append("api_key", apiKey);
  form.append("timestamp", timestamp);
  form.append("folder", folder);
  form.append("signature", signature);

  // PDFs go up as "raw": Cloudinary blocks PDF delivery from the "image"
  // resource type by default (401 "deny or ACL failure").
  const resourceType = mimeType === "application/pdf" ? "raw" : "auto";

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/${resourceType}/upload`,
    { method: "POST", body: form }
  );
  const body: any = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(body?.error?.message || "Cloudinary upload failed.");
  }
  return body.secure_url as string;
}
