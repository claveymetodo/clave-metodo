// scripts/copy-index-to-404.js
import { copyFileSync, existsSync } from "fs";

const src = "dist/index.html";
const dest = "dist/404.html";

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log("✅ Copied index.html -> 404.html");
} else {
  console.error("❌ dist/index.html not found. Did you run npm run build?");
}

