import { SignJWT, jwtVerify } from "jose";
import { env } from "../config/env.js";

export const AUTH_COOKIE = "admin_session";

function getSecret(): Uint8Array {
  if (!env.authSecret) {
    throw new Error("AUTH_SECRET is not set in .env");
  }
  return new TextEncoder().encode(env.authSecret);
}

export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifySessionToken(
  token: string | undefined
): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}
