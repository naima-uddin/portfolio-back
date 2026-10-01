import type { Request, Response, NextFunction } from "express";
import { verifySessionToken, AUTH_COOKIE } from "../utils/token.js";

// Guards write endpoints. Accepts the session either from the httpOnly cookie
// or a Bearer token in the Authorization header.
export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const cookieToken = req.cookies?.[AUTH_COOKIE];
  const header = req.headers.authorization;
  const bearer = header?.startsWith("Bearer ")
    ? header.slice("Bearer ".length)
    : undefined;

  const ok = await verifySessionToken(cookieToken || bearer);
  if (!ok) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}
