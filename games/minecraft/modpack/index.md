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

## Before you install a modpack

Modpacks require a **modded** Minecraft server - **Forge**, **NeoForge**, or **Fabric**. If your server is still on **Vanilla** Minecraft (or another non-modded version), the **Modpacks** option will not show up under the **More** dropdown.

{: .warning}
Don't see **Modpacks** under **More**? Your server is probably still on Vanilla. Change it to Forge, NeoForge, or Fabric first.

### Change your server to a modded version

1. Log in to the [game panel](https://panel.apexnode.host)
2. Select your Minecraft server
3. Open the **Settings** tab
4. In the **Change Egg** section, open the dropdown
5. Select the mod loader you need:
   - **Forge** or **NeoForge** - for most CurseForge modpacks
   - **Fabric** - for Fabric modpacks (check the modpack page if you're not sure)
6. Click **Apply**, then click **Change Egg**
7. Wait for the server to finish installing the new game version

For more detail, see our [Change Game guide](/panel/changegame/).

{: .note}
Pick the mod loader that matches your modpack. If you install the wrong one, the modpack may not work. Check the modpack's page on Modrinth or CurseForge before you switch.

---

## Recommended: Install via ApexNode Modpack Installer

The built-in installer is the fastest and most reliable method for most users. Make sure your server is on Forge, NeoForge, or Fabric first (see above).

### Install a Modpack

1. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
2. Select your Minecraft server
3. Confirm your server is on **Forge**, **NeoForge**, or **Fabric** (not Vanilla)
4. Open **More**
5. Click **Modpacks**
6. Choose a modpack provider
7. Search for your modpack
8. Click the install icon next to the modpack
9. Select the version you want
10. Optional: choose **Delete Server Files** only if you want a clean install
11. Click **Install Modpack** and wait for completion

{: .warning}
The **Delete Server Files** option is irreversible.

---

## Update an Existing Modpack

1. Make sure your server is still on the correct mod loader (Forge, NeoForge, or Fabric)
2. Open **More** -> **Modpacks** in the panel
3. Select the same provider your server modpack uses
4. Find your current modpack
5. Click install and choose the new version
6. Do not select **Delete Server Files** if you want to preserve world and player data
7. Start/restart the server after installation

---

## Manual Modpack Installation (Advanced)

Use manual installation only when the modpack is not available in the installer. Your server still needs to be on Forge, NeoForge, or Fabric for modpacks to run.

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

## Ready to play?

Don't have a Minecraft server yet?

[![Order Now](/apexnode_order_now.png)](https://apexnode.host/games/minecraft-java-server-hosting)
