import type { MetadataRoute } from "next";

const BASE = "https://eyeoyibotsolaye.com";
const paths = ["/", "/about", "/design-engineering", "/fitness-ai", "/pill-pal", "/swiftcart", "/pockit"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "/" ? BASE : `${BASE}${path}`,
  }));
}
