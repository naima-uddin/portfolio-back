import dotenv from "dotenv";

dotenv.config();

function bool(value: string | undefined, fallback = false): boolean {
  if (value === undefined) return fallback;
  return value === "true" || value === "1";
}

export const env = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProd: process.env.NODE_ENV === "production",

  // Allowed frontend origins for CORS (comma-separated).
  corsOrigins: (process.env.CORS_ORIGIN ?? "http://localhost:3000")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),

  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  authSecret: process.env.AUTH_SECRET,

  cookieDomain: process.env.COOKIE_DOMAIN || undefined,
  cookieCrossSite: bool(process.env.COOKIE_CROSS_SITE, false),

  mongoUri: process.env.MONGODB_URI,

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
};

export function isDbConfigured(): boolean {
  return Boolean(env.mongoUri);
}

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    env.cloudinary.cloudName &&
      env.cloudinary.apiKey &&
      env.cloudinary.apiSecret
  );
}
