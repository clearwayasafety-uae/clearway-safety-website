import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clearway Safety & General Trading LLC OPC",
    short_name: "Clearway Safety",
    description: "Industrial safety equipment supplier across the UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ea",
    theme_color: "#173b2d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
