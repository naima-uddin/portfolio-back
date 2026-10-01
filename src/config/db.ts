import mongoose from "mongoose";
import { env } from "./env.js";

let conn: typeof mongoose | null = null;
let promise: Promise<typeof mongoose> | null = null;

// Cached connection so repeated calls reuse a single pool.
export async function connectDB(): Promise<typeof mongoose> {
  if (!env.mongoUri) {
    throw new Error("MONGODB_URI is not set in .env");
  }
  if (conn) return conn;
  if (!promise) {
    promise = mongoose.connect(env.mongoUri, { bufferCommands: false });
  }
  try {
    conn = await promise;
  } catch (error) {
    promise = null;
    throw error;
  }
  return conn;
}
