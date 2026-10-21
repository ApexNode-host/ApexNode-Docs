# ApexNode Docs (legacy host)

**Canonical guides now live at [https://apexnode.host/guides](https://apexnode.host/guides).**

Author and edit guides in the marketing site repo:

- Repo: `ApexNode-LLC`
- Path: `content/guides/**/*.md`
- Routes: `app/guides/`

This repository (`ApexNode-Wiki` / `docs.apexnode.host`) is kept for redirects only.

## Enable redirects on docs.apexnode.host

After `/guides` is deployed on the main site:

```bash
node scripts/make-guides-redirects.mjs
```

Commit and push so GitHub Pages serves redirect stubs (meta refresh + canonical) from old paths to `https://apexnode.host/guides/...`.

For true HTTP 301s (better SEO), also add a Cloudflare / DNS page rule:

`docs.apexnode.host/*` → `https://apexnode.host/guides/$1` (301)
