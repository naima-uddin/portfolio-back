import { connectDB } from "../config/db.js";
import { isDbConfigured } from "../config/env.js";
import { SiteContentModel, SITE_CONTENT_KEY } from "../models/SiteContent.js";
import { defaultSiteContent, type SiteContent } from "../data/portfolio.js";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

// Deep-merges a saved (possibly partial) content object over the built-in
// defaults. Arrays are replaced wholesale when present; plain objects merge
// key by key.
function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      result[key] = deepMerge(
        (base as Record<string, unknown>)[key],
        (override as Record<string, unknown>)[key]
      );
    }
    return result as T;
  }
  return override as T;
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!isDbConfigured()) return defaultSiteContent;

  try {
    await connectDB();
    const doc = await SiteContentModel.findOne({
      key: SITE_CONTENT_KEY,
    }).lean<{ data?: Partial<SiteContent> }>();
    if (!doc?.data) return defaultSiteContent;
    return deepMerge(defaultSiteContent, doc.data);
  } catch (error) {
    console.error("getSiteContent: falling back to defaults —", error);
    return defaultSiteContent;
  }
}

export async function saveSiteContent(
  data: Record<string, unknown>
): Promise<void> {
  await connectDB();
  await SiteContentModel.findOneAndUpdate(
    { key: SITE_CONTENT_KEY },
    { key: SITE_CONTENT_KEY, data },
    { returnDocument: "after", upsert: true, setDefaultsOnInsert: true }
  );
}
