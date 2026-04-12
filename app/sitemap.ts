import type { MetadataRoute } from "next";

const BASE_URL = "https://website.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact"];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
