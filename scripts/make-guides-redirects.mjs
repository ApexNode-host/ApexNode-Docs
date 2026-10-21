/**
 * Convert wiki markdown pages into redirect stubs → apexnode.host/guides/...
 * Run from ApexNode-Wiki root after guides are live on the main site.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TARGET = "https://apexnode.host/guides";
const SKIP = new Set(["README.md", "404.md"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if ([".paperclip", ".github", "_site", "_layouts", "scripts", "node_modules"].includes(entry.name)) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function fileToDest(rel) {
  if (rel === "index.md") return TARGET;
  if (rel.endsWith("/index.md")) {
    return `${TARGET}/${rel.slice(0, -"/index.md".length)}`;
  }
  return `${TARGET}/${rel.replace(/\.md$/i, "")}`;
}

function main() {
  const files = walk(root).filter((f) => !SKIP.has(path.basename(f)));
  for (const full of files) {
    const rel = path.relative(root, full).split(path.sep).join("/");
    const dest = fileToDest(rel);
    const title = path.basename(rel, ".md") === "index"
      ? path.basename(path.dirname(full))
      : path.basename(rel, ".md");
    const body = `---
title: Redirect
layout: redirect
redirect_to: ${dest}
nav_exclude: true
sitemap: false
---

# Moved

This guide now lives at [${dest}](${dest}).
`;
    fs.writeFileSync(full, body, "utf8");
    console.log(rel, "→", dest);
  }

  // Path-preserving fallback for unknown URLs on GitHub Pages
  fs.writeFileSync(
    path.join(root, "404.md"),
    `---
title: Redirect
layout: redirect
permalink: /404.html
redirect_to: ${TARGET}
nav_exclude: true
sitemap: false
---

# Moved

<script>
(function () {
  var path = location.pathname.replace(/\\/$/, "") || "";
  location.replace(${JSON.stringify(TARGET)} + path + location.search + location.hash);
})();
</script>
`,
    "utf8",
  );

  console.log(`Rewrote ${files.length} pages to redirect stubs.`);
}

main();
