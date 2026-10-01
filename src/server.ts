import { createApp } from "./app.js";
import { env, isDbConfigured } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function start() {
  const app = createApp();

  // Warm the DB connection on boot (non-fatal: the API still serves static
  // fallback content if the DB is unreachable).
  if (isDbConfigured()) {
    try {
      await connectDB();
      console.log("✓ Connected to MongoDB");
    } catch (error) {
      console.error("✗ MongoDB connection failed — serving static fallback:", error);
    }
  } else {
    console.warn("⚠ MONGODB_URI not set — serving built-in static content (read-only).");
  }

  app.listen(env.port, () => {
    console.log(`✓ API listening on http://localhost:${env.port}`);
    console.log(`  CORS origins: ${env.corsOrigins.join(", ")}`);
  });
}

start();
