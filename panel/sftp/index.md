---
title: SFTP File Access
layout: default
parent: Game Panel
nav_order: 3
---

# How to use SFTP with your game server

SFTP (SSH File Transfer Protocol) lets you connect to your game server’s files from your computer using a dedicated file transfer program. It is the best way to upload, download, and manage large files on your server.

For small files, you can still use the **Files** tab in the [game panel](https://panel.apexnode.host). For anything larger-or when you are moving many files at once-use SFTP instead.

---

## Why use SFTP instead of the web panel?

The game panel file manager is convenient for quick edits and small uploads, but it has limits that make SFTP the better choice for most file work.

### 1 GB upload limit in the web panel

Uploads through the **Files** tab in the game panel are limited to **1 GB per file**. If you are installing a large mod pack, world backup, or other big archive, the web uploader will not accept it.

SFTP has no such per-file limit from our panel, so you can transfer large files directly to your server storage.

### Better performance

Large uploads through a web browser are slower and less reliable than a dedicated SFTP client. SFTP clients are built for file transfers-they handle big files, resume interrupted uploads, and let you drag and drop entire folders at once.

### Security

We restrict the web panel upload size for **performance and security**. Limiting browser-based uploads helps protect the panel and node from abuse, such as oversized or malicious upload attempts that could affect server stability.

SFTP uses an encrypted connection and is the standard, secure way to manage server files at scale.

{: .success}
For most file work-especially mods, plugins, backups, and world files-we recommend using SFTP.

---

## Recommended SFTP programs

We recommend the following free programs:

| Program | Platform | Download |
|:--------|:---------|:---------|
| **FileZilla** | Windows, macOS, Linux | [https://filezilla-project.org](https://filezilla-project.org) |
| **WinSCP** | Windows | [https://winscp.net](https://winscp.net) |

You may use **any SFTP client** you are comfortable with. Other popular options include Cyberduck (macOS/Windows) and built-in SFTP support in tools like VS Code. Just make sure the program supports **SFTP**-regular FTP is not the same protocol and will not work.

---

## Step 1. Get your SFTP connection details

1. Log in to the [game panel](https://panel.apexnode.host)
2. Select the game server you want to connect to
3. Open the **Files** tab
4. Note the SFTP connection details shown at the top of the page:
   - **Server address** (hostname)
   - **Username**
   - **Port** (commonly `2022`)

Your SFTP password is the same password you use to log in to the game panel.

{: .warning}
Each game server has its own SFTP username. If you manage multiple servers, use the credentials shown on the **Files** tab for the server you are working on.

---

## Step 2. Connect with FileZilla

1. Open FileZilla
2. Go to **File -> Site Manager** (or press `Ctrl+S`)
3. Click **New Site** and give it a name (e.g. "My ApexNode Server")
4. Set **Protocol** to **SFTP - SSH File Transfer Protocol**
5. Enter your **Host** (server address from the panel)
6. Enter **Port** (from the panel, usually `2022`)
7. Set **Logon Type** to **Normal**
8. Enter your **User** and **Password** from the panel
9. Click **Connect**

Once connected, your local files appear on the left and your server files on the right. Drag and drop files between the two sides to upload or download.

---

## Step 3. Connect with WinSCP

1. Open WinSCP
2. On the login screen, set **File protocol** to **SFTP**
3. Enter your **Host name** (server address from the panel)
4. Enter **Port number** (from the panel, usually `2022`)
5. Enter your **User name** and **Password** from the panel
6. Click **Login**
7. If prompted about the server host key, click **Yes** to trust and save it

Once connected, your local files appear on the left and your server files on the right. Drag and drop to transfer files.

---

## Tips

- **Stop the server** before replacing game files that are in use (e.g. swapping a mod or plugin `.jar`), then start it again when finished.
- Upload to the correct folder for your game (e.g. `mods`, `plugins`, `worlds`). Check the relevant [game guides](../../games/) if you are unsure.
- For files over 1 GB, always use SFTP-the web panel uploader cannot accept them.
- If you cannot connect, double-check the server address, port, username, and password on the **Files** tab for the correct server.
