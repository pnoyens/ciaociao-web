import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CiaoCiao - LinkedIn Relationship Intelligence",
    short_name: "CiaoCiao",
    description:
      "Discover the right conversations on LinkedIn before you reach out. Turn cold outreach into warm relationships.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#151515",
    icons: [
      {
        src: "/img/logo/chow-chow-logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/logo/chow-chow-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
