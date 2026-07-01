import { MetadataRoute } from "next";

const routes = ["/", "/products", "/categories", "/industries", "/blog", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://clearway-safety.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
