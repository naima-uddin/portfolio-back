import mongoose, { Schema } from "mongoose";

// A single-document collection holding all editable portfolio content
// (everything except projects). The whole content object is stored under
// `data` as a flexible sub-document so the shape can evolve freely — the
// service layer merges it over the built-in defaults.
const SiteContentSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, default: "singleton" },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, minimize: false }
);

export const SiteContentModel =
  mongoose.models.SiteContent ||
  mongoose.model("SiteContent", SiteContentSchema);

export const SITE_CONTENT_KEY = "singleton";
