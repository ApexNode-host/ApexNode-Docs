---
title: BeamNG Server Modding
description: How to install mods on your ApexNode BeamMP server using the mod manager or manual upload.
layout: default
parent: BeamNG Server Guides
---

# BeamNG Server Modding Guide

This guide covers the two easiest ways to install mods on your BeamMP server:

1. Use our built-in one-click mod installer (recommended for most users)
2. Upload mod files manually (best for private or custom mod packs)

---

## Before You Install Mods

{: .warning}
Only install mods from trusted authors and sources. Untrusted files may contain malware or unsafe code.

{: .success}
We recommend downloading from the official [BeamNG Mod Repository](https://www.beamng.com/resources).

{: .warning}
Always verify mod compatibility with your current BeamMP/BeamNG version. Incompatible mods can cause startup issues, missing assets, or crashes.

---

## Method 1: One-Click Mod Installer (Recommended)

For BeamMP servers, ApexNode includes a built-in mod manager so you can install supported mods without manual uploads.

### Steps

1. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
2. Select your BeamNG server
3. Open the **More** tab in your server menu
4. Click **Mods**
5. Browse or search for the mod you want
6. Click install to add it to your server
7. Restart the server after installation

At the bottom of the mod manager, you can also view installed mods and remove ones you no longer want.

---

## Method 2: Manual Mod Installation (ZIP Upload)

Use this method when a mod is not available in the one-click manager, or when you are installing a custom/private mod.

### Folder Placement Quick Reference

- **Vehicles, maps, parts, and configs:** `/Resources/Client`
- **Server-side scripts/tools (admin utilities, server logic, etc.):** `/Resources/Server`

Placing files in the wrong folder is one of the most common causes of mods not loading.

{: .note}
The game panel **Files** tab supports uploads up to **1 GB per file**. For larger mod files-or when uploading many files at once-use [SFTP](/panel/sftp/) instead.

### Step-by-Step

1. Download the mod file to your computer (usually a `.zip`)
2. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
3. Select your BeamNG server
4. Open the **Files** tab
5. Navigate to the correct folder:
   - `/Resources/Client` for client content
   - `/Resources/Server` for server-side content
6. Upload the mod `.zip` file via the **Files** tab, or use [SFTP](/panel/sftp/) if the file is over 1 GB
7. Restart your server
8. Join the server and confirm the mod content loads correctly

---

## Troubleshooting

If a mod is not working, check the following:

1. The mod was uploaded to the correct folder (`Client` vs `Server`)
2. The mod file was fully uploaded and is not corrupted
3. The mod version supports your current BeamMP/BeamNG version
4. You restarted the server after installation
5. The mod does not require additional dependencies

If problems continue, remove the last installed mod and restart again to confirm whether that mod is the cause.

---

## Best Practices for Stable Modded Servers

- Add mods in small batches, not all at once
- Keep a list of installed mods and versions
- Test after each major mod change
- Remove old or duplicate mods to avoid conflicts
