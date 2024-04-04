/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "http://localhost:8080",
  scanner: {
    robotsTxt: false,
    sitemap: false,
  },
  urls: ["/", "/inp", "/lcp", "/cls"],
});
