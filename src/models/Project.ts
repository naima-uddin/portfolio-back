import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    color: { type: String, default: "#34d399" },
    liveUrl: { type: String, default: "#" },
    githubUrl: { type: String, default: "" },
    image: { type: String },
    gallery: { type: [String], default: [] },
    repoLinks: {
      type: [{ _id: false, label: String, url: String }],
      default: [],
    },
    description: { type: String, default: "" },
    shortDesc: { type: String, default: "" },
    keyFeatures: { type: [String], default: [] },
    techStack: {
      frontend: { type: [String], default: undefined },
      backend: { type: [String], default: undefined },
      database: { type: [String], default: undefined },
      integration: { type: [String], default: undefined },
      deployment: { type: [String], default: undefined },
      ai: { type: [String], default: undefined },
      realtime: { type: [String], default: undefined },
    },
    highlights: { type: [String], default: [] },
    category: { type: String, default: "Web App" },
    status: { type: String, enum: ["Live", "Completed"], default: "Live" },
    duration: { type: String, default: "" },
    tags: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    challenges: { type: [String], default: undefined },
    solutions: { type: [String], default: undefined },
    learnings: { type: [String], default: undefined },
  },
  { timestamps: true }
);

export const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
