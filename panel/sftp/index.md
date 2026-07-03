---
title: SFTP File Access
description: How to connect to your ApexNode game server via SFTP using FileZilla or WinSCP for fast, unlimited file transfers.
layout: default
parent: Game Panel
nav_order: 3
---

# How to use SFTP with your game server

SFTP lets you connect to your game server's files from your computer using a program like FileZilla or WinSCP. It's the easiest way to upload, download, and manage files on your server-especially when you're working with bigger files.

For quick edits or small uploads, the **Files** tab in our [game panel](https://panel.apexnode.host) works just fine. For anything larger, or when you're moving a lot of files at once, you'll want to use SFTP instead. Simply follow our steps below.

---

## Why use SFTP instead of the web panel?

The **Files** tab in the game panel has a **1 GB per file** upload limit. If you're trying to install a large mod pack, upload a world backup, or move any other big file, the web uploader won't accept it.

We keep that limit in place for performance and security reasons-large browser uploads can slow things down and put extra strain on the panel. SFTP doesn't have that same restriction, and it's generally faster and more reliable for bigger transfers too.

{: .success}
For mods, plugins, backups, and world files, we recommend using SFTP whenever you can.

---

## Recommended SFTP programs

We recommend these free programs:

| Program | Platform | Download |
|:--------|:---------|:---------|
| **FileZilla** | Windows, macOS, Linux | [https://filezilla-project.org](https://filezilla-project.org) |
| **WinSCP** | Windows | [https://winscp.net](https://winscp.net) |

You're welcome to use any SFTP program you're comfortable with-Cyberduck and VS Code are popular alternatives. Just make sure it supports **SFTP**, not regular FTP. They're different protocols and regular FTP won't work with our servers.

---

### Step 1. Login to our [game panel](https://panel.apexnode.host)

### Step 2. Select the game server you want to connect to

### Step 3. Click the "Files" tab

At the top of the page you'll see your SFTP connection details-your server address, username, and port (usually `2022`). Your SFTP password is the same password you use to log in to the game panel.

{: .warning}
Each game server has its own SFTP username. If you manage multiple servers, make sure you're using the credentials shown on the **Files** tab for the server you're working on.

---

### Step 4. Connect with FileZilla

1. Open FileZilla
2. Go to **File → Site Manager** (or press `Ctrl+S`)
3. Click **New Site** and give it a name (e.g. "My ApexNode Server")
4. Set **Protocol** to **SFTP - SSH File Transfer Protocol**
5. Enter your **Host** (server address from the panel)
6. Enter **Port** (from the panel, usually `2022`)
7. Set **Logon Type** to **Normal**
8. Enter your **User** and **Password** from the panel
9. Click **Connect**

Your local files will show up on the left and your server files on the right. From there you can drag and drop files to upload or download them.

---

### Step 5. Connect with WinSCP

1. Open WinSCP
2. Set **File protocol** to **SFTP**
3. Enter your **Host name** (server address from the panel)
4. Enter **Port number** (from the panel, usually `2022`)
5. Enter your **User name** and **Password** from the panel
6. Click **Login**
7. If you're asked about the server host key, click **Yes** to trust and save it

Same as FileZilla-your local files are on the left, server files on the right. Drag and drop to transfer.

---

## A few things to keep in mind

- **Stop your server** before replacing files that are in use (like swapping out a mod or plugin `.jar`), then start it back up when you're done.
- Make sure you're uploading to the right folder for your game (e.g. `mods`, `plugins`, `worlds`). If you're not sure, check our [game guides](../../games/).
- Files over 1 GB need to go through SFTP-the web panel uploader can't handle them.
- Having trouble connecting? Double-check the server address, port, username, and password on the **Files** tab for the correct server.
