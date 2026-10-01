import { Router } from "express";
import type { CookieOptions } from "express";
import { env } from "../config/env.js";
import { createSessionToken, AUTH_COOKIE } from "../utils/token.js";
import { asyncHandler } from "../middleware/error.js";

const router = Router();

function cookieOptions(): CookieOptions {
  return {
    httpOnly: true,
    secure: env.cookieCrossSite || env.isProd,
    sameSite: env.cookieCrossSite ? "none" : "lax",
    path: "/",
    domain: env.cookieDomain,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  };
}

// POST /api/auth/login — validate admin credentials, set the session cookie.
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body ?? {};

    if (!env.adminEmail || !env.adminPassword) {
      res
        .status(500)
        .json({ error: "Admin credentials are not configured on the server." });
      return;
    }

    if (email !== env.adminEmail || password !== env.adminPassword) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const token = await createSessionToken();
    res.cookie(AUTH_COOKIE, token, cookieOptions());
    // Also return the token so clients that cannot share cookies cross-site
    // can fall back to a Bearer header.
    res.json({ ok: true, token });
  })
);

// POST /api/auth/logout — clear the session cookie.
router.post("/logout", (_req, res) => {
  res.cookie(AUTH_COOKIE, "", {
    ...cookieOptions(),
    maxAge: 0,
  });
  res.json({ ok: true });
});

export default router;
