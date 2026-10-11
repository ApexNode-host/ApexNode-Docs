---
title: Migrate to ApexNode
description: Switch your game server from another host to ApexNode - backup, order, transfer, and join check. Free migration help available.
layout: default
nav_order: 3.5
---

# Switch to ApexNode from another host

Moving your Minecraft (or other game) server from another host? This guide walks through the full path: **backup → order ApexNode → transfer → join check**.

{: .success}
**Free server migration.** Migrating from another host? We'll help transfer your server at no extra cost. Prefer a hands-off move? Ask in [Discord](https://apexnode.host/discord) or open a [support ticket](https://dash.apexnode.host/tickets/create) after you order.

This page is **Minecraft-first**. The same flow works for other ApexNode games - use the matching game page when you order, and keep the game type the same on both hosts.

---

## What you'll need

1. Access to your old host's panel (and SFTP/FTP details if you'll import yourself)
2. A local copy of an important backup (world, configs, mods/plugins)
3. An ApexNode account ready to order - [browse Minecraft plans](https://apexnode.host/games/minecraft-java-server-hosting) or [all games on the website](https://apexnode.host)

---

## Step 1. Back up your old server

Do this **before** you cancel or wipe anything on the old host.

1. Fully **stop** the old server so world and database files are not mid-write.
2. Download a full backup of the server files you care about:
   - Minecraft: world folders, `server.properties`, `ops.json` / whitelist, `plugins` or `mods`, and any custom configs
   - Keep the archive somewhere safe on your PC (and ideally a second copy)
3. Note your old connection details: hostname/IP, port, and whether you use a custom domain or subdomain.

{: .warning}
Do not cancel the old host until you've confirmed players can join the ApexNode server and everything looks correct. Keep the old server as a fallback for at least one successful play session.

{: .note}
Your old host's panel usually has a **Backup**, **Files**, or **SFTP** section. If you're unsure, download the full server directory over SFTP.

---

## Step 2. Order your ApexNode server

1. Open the [Minecraft: Java plans page](https://apexnode.host/games/minecraft-java-server-hosting) (or pick your game from [apexnode.host](https://apexnode.host)).
2. Choose a plan with enough **RAM** and **disk** for your world, mods, and plugins. When in doubt, size up slightly - you can change plans later in the [billing portal](https://dash.apexnode.host).
3. Complete checkout and wait for the server to provision (usually a few minutes).
4. Log in to the [game panel](https://panel.apexnode.host) and confirm the new server appears.

{: .warning}
Match the **same game and server type** as your old setup before you transfer files. For Minecraft, that means the same family (Vanilla, Paper, Forge, Fabric, etc.). Use [Change Game](panel/changegame) if you need to switch the egg/mod loader first.

New to ApexNode? See [Getting Started](getstarted) for account and first-server basics.

---

## Step 3. Transfer your files

Pick one path:

### Option A - Server Importer (recommended)

Use the built-in importer to pull files straight from your old host over FTP/FTPS/SFTP.

1. Stop the old server (required for a clean transfer).
2. In the game panel, open your ApexNode server → **Server Importer**.
3. Enter the old host's connection details and start the import.

Full walkthrough: [Server Importer](panel/server-importer).

### Option B - Manual upload (SFTP)

If you already have a zip/folder backup on your PC:

1. Stop the ApexNode server.
2. Upload your files with [SFTP](panel/sftp) (or the panel file manager for small files).
3. Keep folder layout the same as on the old host (worlds, `plugins`, `mods`, configs, and so on).

{: .note}
Panel web uploads are capped at **1 GB per file**. Large worlds and modpacks should go over SFTP.

### Option C - Free assisted migration

Want us to handle the move? After you order:

1. Join [Discord](https://apexnode.host/discord) or open a [support ticket](https://dash.apexnode.host/tickets/create).
2. Share that you want a **free migration**, which game you're on, and how we can reach the old host files (SFTP details or a backup you're ready to provide securely through support).
3. We'll coordinate the transfer so you can focus on going live.

---

## Step 4. DNS / join check

After files are in place:

1. **Start** the ApexNode server from the game panel and watch the console for a clean boot (no missing world, mod, or plugin errors).
2. Copy the server address from the panel (IP and port, or your ApexNode subdomain if you set one up).
3. Join from Minecraft with that address and confirm:
   - World and player data look correct
   - Plugins/mods load
   - Permissions, whitelist, and spawn behave as expected
4. If you use a **custom domain** pointed at the old host, update the DNS A/SRV records to the new ApexNode IP/port, then wait for DNS to propagate before telling everyone the old address still works.
5. For an easier shareable address on Minecraft Java, see [Minecraft Java Subdomains](games/minecraft/subdomains).

{: .success}
Only after a successful join (and a short play test) should you cancel the old host or change community invite links permanently.

---

## Quick checklist

| Step | Done when |
| --- | --- |
| Backup | Full stop + download of world/configs/mods-plugins saved locally |
| Order | ApexNode server live in the [game panel](https://panel.apexnode.host), same game type as before |
| Transfer | Files imported or uploaded; server starts cleanly |
| Join check | You (and ideally a second player) can connect; DNS updated if needed |

---

## Related guides

- [Server Importer](panel/server-importer) - pull files from the old host
- [SFTP File Access](panel/sftp) - manual uploads and large files
- [Change Game](panel/changegame) - match mod loader / game type
- [Minecraft Server Guides](games/minecraft) - optimize, mods, plugins, subdomains
- [Getting Started](getstarted) - first ApexNode server

---

## Need help?

- [Official Discord](https://apexnode.host/discord) - community help and migration requests
- [Support ticket](https://dash.apexnode.host/tickets/create) - billing portal contact form
- [Minecraft plans](https://apexnode.host/games/minecraft-java-server-hosting) - order or compare plans
- [Website](https://apexnode.host) - all games and hosting options

----

[Official Discord]: https://apexnode.host/discord
[Billing Portal]: https://dash.apexnode.host
[Game Panel]: https://panel.apexnode.host
[Website]: https://apexnode.host
