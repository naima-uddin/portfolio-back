import type { Request, Response, NextFunction } from "express";

export function notFound(_req: Request, res: Response): void {
  res.status(404).json({ error: "Not found." });
}

// Centralized error handler. Express identifies it by its 4-arg signature.
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Multer's file-size limit surfaces here — report it as 413.
  if (
    typeof err === "object" &&
    err !== null &&
    (err as { code?: string }).code === "LIMIT_FILE_SIZE"
  ) {
    res.status(413).json({ error: "File is too large (max 8 MB)." });
    return;
  }

  console.error("Unhandled error:", err);
  const message = err instanceof Error ? err.message : "Internal server error.";
  res.status(500).json({ error: message });
}

// Wraps an async route handler so thrown errors reach errorHandler.
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
