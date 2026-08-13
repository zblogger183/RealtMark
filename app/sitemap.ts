import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { COUNTRIES } from "@/lib/locations";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.filter((service) => service.status === "live").map(
    (service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const countryRoutes: MetadataRoute.Sitemap = COUNTRIES.filter((country) => country.status === "live").map(
    (country) => ({
      url: `${SITE_URL}/${country.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const cityRoutes: MetadataRoute.Sitemap = COUNTRIES.filter((country) => country.status === "live").flatMap(
    (country) =>
      country.cities
        .filter((city) => city.status === "live")
        .map((city) => ({
          url: `${SITE_URL}/${country.slug}/${city.slug}`,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
  );

  const areaRoutes: MetadataRoute.Sitemap = COUNTRIES.filter((country) => country.status === "live").flatMap(
    (country) =>
      country.cities
        .filter((city) => city.status === "live")
        .flatMap((city) =>
          city.areas
            .filter((area) => area.status === "live")
            .map((area) => ({
              url: `${SITE_URL}/${country.slug}/${city.slug}/${area.slug}`,
              changeFrequency: "monthly" as const,
              priority: 0.5,
            }))
        )
  );

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) => post.status === "live").map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...countryRoutes, ...cityRoutes, ...areaRoutes, ...blogRoutes];
}
