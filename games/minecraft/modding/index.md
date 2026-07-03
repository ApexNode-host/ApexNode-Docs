---
title: Minecraft Server Modding
description: How to install Forge, Fabric, and NeoForge mods on your ApexNode Minecraft server.
layout: default
parent: Minecraft Server Guides
---

# Minecraft Server Modding Guide

This guide is for Minecraft Java servers using **Forge**, **Fabric**, or **NeoForge**.

{: .warning}
Vanilla and Bedrock servers cannot load Java mod `.jar` files.

{: .success}
We recommend downloading mods from [Modrinth](https://modrinth.com/mods) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods).

---

## Before You Install Mods

{: .warning}
Only download mods from trusted authors and sources.

{: .warning}
Confirm every mod matches your server's Minecraft version and mod loader version.

Many mods also require dependency mods (libraries/core APIs). Always check each mod page for required dependencies.

{: .note}
The game panel **Files** tab supports uploads up to **1 GB per file**. For larger files-or when uploading many mods at once-use [SFTP](/panel/sftp/) instead.

---

## Step-by-Step Installation

1. Download the mod to your computer
2. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
3. Select your Minecraft server
4. Open the **Files** tab
5. Open the `mods` folder
6. If the `mods` folder does not exist, create it
7. Upload your `.jar` mod file to `mods` via the **Files** tab, or use [SFTP](/panel/sftp/) if the file is over 1 GB
8. If the download is a `.zip`, unarchive it on your computer, then upload the contained `.jar` file(s) to `mods`
9. Restart the server
10. Join the server and verify the mod is loaded

---

## Troubleshooting

If a mod fails to load, check the following:

1. The file in `mods` is a `.jar`, not just a `.zip`
2. The mod version matches your Minecraft and loader versions
3. Required dependency mods are installed
4. The server was fully restarted after upload
5. Error details in logs reference a missing dependency or wrong version
