---
title: Minecraft Server Plugins
layout: default
parent: Minecraft Server Guides
---

# Minecraft Server Plugin Installation Guide

This guide is for plugin-based Minecraft Java servers such as **Spigot**, **Paper**, and compatible forks.

{: .warning}
Vanilla, Bedrock, and most mod-loader servers (Forge/Fabric/NeoForge) do not use Bukkit/Spigot plugins.

{: .success}
We recommend plugin downloads from [SpigotMC](https://www.spigotmc.org), [Modrinth](https://modrinth.com/plugins), or [CurseForge](https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=relevancy&class=bukkit-plugins).

---

## Before You Install Plugins

{: .warning}
Only install plugins from trusted authors and sources.

{: .warning}
Check plugin compatibility with both your Minecraft version and your server software version.

Some plugins require dependency plugins. Review each plugin page for required libraries or companion plugins.

{: .note}
The game panel **Files** tab supports uploads up to **1 GB per file**. For larger files—or when uploading many plugins at once—use [SFTP](/panel/sftp/) instead.

---

## Step-by-Step Installation

1. Download the plugin to your computer
2. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
3. Select your Minecraft server
4. Open the **Files** tab
5. Open the `plugins` folder
6. If the `plugins` folder does not exist, create it
7. Upload the plugin `.jar` file into `plugins` via the **Files** tab, or use [SFTP](/panel/sftp/) if the file is over 1 GB
8. If your download is a `.zip`, unarchive it on your computer, then upload the contained `.jar` file(s)
9. Restart the server
10. Confirm the plugin loads in console output and in-game behavior

---

## Troubleshooting

If a plugin does not load, check:

1. The plugin file is a valid `.jar`
2. Plugin version matches your Minecraft and server software version
3. Required dependencies are installed
4. Server restarted after upload
5. Startup logs for specific plugin errors
