import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clearwaytoolsonline.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/ppe-supplier-uae`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/safety-helmets-uae`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/fire-safety-equipment-abu-dhabi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/anti-slip-tape-abu-dhabi`,
      lastModified: new Date(),
    }
  ];
}
