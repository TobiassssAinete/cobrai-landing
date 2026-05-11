import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const aiBotsAllowed = [
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "DuckDuckBot",
    "Applebot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "CCBot",
    "Bytespider",
    "MistralAI-User",
    "cohere-ai",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBotsAllowed.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
