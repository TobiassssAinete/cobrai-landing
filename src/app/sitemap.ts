import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/que-es-cobria", changeFrequency: "monthly", priority: 0.9 },
    { path: "/colegios", changeFrequency: "monthly", priority: 0.9 },
    { path: "/consorcios", changeFrequency: "monthly", priority: 0.9 },
    { path: "/precios", changeFrequency: "monthly", priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.6 },
    { path: "/terminos", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
