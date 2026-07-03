---
title: Minecraft Server Modpacks
description: How to install modpacks on your ApexNode Minecraft server using the built-in installer or manual upload.
layout: default
parent: Minecraft Server Guides
---

# Minecraft Server Modpack Guide

This guide is for Minecraft Java servers using Forge, Fabric, or NeoForge.

{: .warning}
Vanilla and Bedrock servers cannot run Java modpacks.

{: .success}
We recommend trusted modpack sources such as [Modrinth](https://modrinth.com/modpacks) and [CurseForge](https://www.curseforge.com/minecraft/modpacks).

---

## Recommended: Install via ApexNode Modpack Installer

The built-in installer is the fastest and most reliable method for most users.

### Install a Modpack

1. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
2. Select your Minecraft server
3. Open **More**
4. Click **Modpacks**
5. Choose a modpack provider
6. Search for your modpack
7. Click the install icon next to the modpack
8. Select the version you want
9. Optional: choose **Delete Server Files** only if you want a clean install
10. Click **Install Modpack** and wait for completion

{: .warning}
The **Delete Server Files** option is irreversible.

---

## Update an Existing Modpack

1. Open **More** -> **Modpacks** in the panel
2. Select the same provider your server modpack uses
3. Find your current modpack
4. Click install and choose the new version
5. Do not select **Delete Server Files** if you want to preserve world and player data
6. Start/restart the server after installation

---

## Manual Modpack Installation (Advanced)

Use manual installation only when the modpack is not available in the installer.

{: .warning}
Always use the official server pack when available. Client packs often include client-only mods that can crash a server.

{: .note}
Modpack server archives are often larger than 1 GB. The web panel **Files** tab cannot accept files over **1 GB per file**-use [SFTP](/panel/sftp/) for large modpack uploads.

### Steps

1. Download the modpack's server pack from a trusted source
2. Log in to the ApexNode panel and select your server
3. Open the **Files** tab (or connect via [SFTP](/panel/sftp/) for archives over 1 GB)
4. Upload the server pack archive
5. Unarchive it in the server root directory
6. Start the server
7. If it crashes, check logs for client-only mods and remove them

For help with crash triage, join support via [Discord](https://apexnode.host/discord).

---

Don't have a Minecraft server yet? [Order one here](https://apexnode.host/games/minecraft-java-server-hosting).
