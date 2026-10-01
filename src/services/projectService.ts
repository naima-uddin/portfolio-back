import { connectDB } from "../config/db.js";
import { isDbConfigured } from "../config/env.js";
import { ProjectModel } from "../models/Project.js";
import { projects as fallbackProjects, type Project } from "../data/portfolio.js";

// Converts a lean mongoose doc into a plain Project object
// (strips _id/__v/timestamps and empty techStack groups).
export function toProject(doc: any): Project {
  const techStack: Project["techStack"] = {};
  for (const [key, value] of Object.entries(doc.techStack ?? {})) {
    if (Array.isArray(value) && value.length > 0) {
      techStack[key as keyof Project["techStack"]] = value as string[];
    }
  }

  return {
    id: doc.id,
    title: doc.title,
    color: doc.color ?? "#34d399",
    liveUrl: doc.liveUrl ?? "#",
    image: doc.image || undefined,
    description: doc.description ?? "",
    shortDesc: doc.shortDesc ?? "",
    keyFeatures: doc.keyFeatures ?? [],
    techStack,
    highlights: doc.highlights ?? [],
    category: doc.category ?? "Web App",
    status: doc.status === "Completed" ? "Completed" : "Live",
    duration: doc.duration ?? "",
    tags: doc.tags ?? [],
    featured: Boolean(doc.featured),
    challenges: doc.challenges?.length ? doc.challenges : undefined,
    solutions: doc.solutions?.length ? doc.solutions : undefined,
    learnings: doc.learnings?.length ? doc.learnings : undefined,
  };
}

export interface ProjectsResult {
  projects: Project[];
  source: "db" | "fallback";
  dbConfigured: boolean;
  dbCount: number;
}

// Returns DB projects when available; otherwise the built-in static list.
export async function getProjects(): Promise<ProjectsResult> {
  if (!isDbConfigured()) {
    return {
      projects: fallbackProjects,
      source: "fallback",
      dbConfigured: false,
      dbCount: 0,
    };
  }

  try {
    await connectDB();
    const docs = await ProjectModel.find().sort({ createdAt: 1 }).lean();
    if (docs.length === 0) {
      return {
        projects: fallbackProjects,
        source: "fallback",
        dbConfigured: true,
        dbCount: 0,
      };
    }
    return {
      projects: docs.map(toProject),
      source: "db",
      dbConfigured: true,
      dbCount: docs.length,
    };
  } catch (error) {
    console.error("getProjects: falling back to static data —", error);
    return {
      projects: fallbackProjects,
      source: "fallback",
      dbConfigured: true,
      dbCount: 0,
    };
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (isDbConfigured()) {
    try {
      await connectDB();
      const doc = await ProjectModel.findOne({ id }).lean();
      if (doc) return toProject(doc);
      // If the DB has projects, an unknown id is a real 404 — but when the
      // DB is empty we still serve the static fallback.
      const count = await ProjectModel.estimatedDocumentCount();
      if (count > 0) return null;
    } catch (error) {
      console.error("getProjectById: falling back to static data —", error);
    }
  }
  return fallbackProjects.find((p) => p.id === id) ?? null;
}
