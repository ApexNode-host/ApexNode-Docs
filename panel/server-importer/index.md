---

## title: Server Importer
description: How to migrate an existing game server from another host to ApexNode using the built-in Server Importer.
layout: default
parent: Game Panel
nav_order: 4

# How to import your server from another host

Moving to ApexNode from another host? Our built-in **Server Importer** lets you pull your existing server files over quickly, without manually downloading and re-uploading everything yourself.

Order a server with us first, then use Server Importer to connect to your old host and transfer your files over. Simply follow our steps below.

---

## Before you start

You'll need:

1. An ApexNode server already ordered and ready in the [game panel](https://panel.apexnode.host)
2. Your old host's file access details (host address, port, username, password, and server type)

{: .warning}
**Stop your old server before starting the import.** If the old server is still online, some files may not transfer properly (especially world files, databases, and other files that stay open while the server is running).

{: .note}
Most hosts list these details in their control panel, often under a Files, SFTP, or Settings section. If you're not sure where to find them, check your old host's docs or support.

{: .warning}
Make sure your ApexNode server is set to the **same game** (or matching mod loader) as the server you're importing. For example, if you're moving a Forge Minecraft server, change your ApexNode server to Forge first using our [Change Game guide](changegame).

---

### Step 1. Stop your old server

On your previous host, fully stop the game server you're migrating. Leave it offline for the entire import.

### Step 2. Login to our [game panel](https://panel.apexnode.host)

### Step 3. Select the ApexNode server you want to import into

### Step 4. Click "Server Importer" in the server menu

### Step 5. Fill in your old host's connection details

Enter the connection details from your previous host:

- **Server Type** - choose **FTP**, **FTPS**, or **SFTP** (use whatever your old host supports - SFTP is preferred when available)
- **Host** - the server address / hostname
- **Port** - the port for that server type (common values include `21` for FTP/FTPS, or `22` / `2022` for SFTP)
- **Username** - your username on the old host
- **Password** - your password on the old host
- **Base Directory** *(optional)* - the folder to import from on the old host. Defaults to `/` (root). Change this if your server files are in a subfolder.

{: .note}
On many hosts, the SFTP password is the same password you use to sign in to their panel - but not always. Use the password shown in their SFTP/file access details if it's different.

Double-check everything before continuing. A typo in the host, port, credentials, or server type will prevent the import from connecting.

### Step 6. Choose whether to wipe the current server files

You'll see a toggle to **delete / wipe files** on your ApexNode server before the import starts.


| Option            | What happens                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Wipe enabled**  | Your ApexNode server files are cleared first, then the imported files are transferred in. Best for a clean migration.          |
| **Wipe disabled** | Existing files stay. Imported files will **overwrite** matching files. Extra files already on your ApexNode server may remain. |


{: .warning}
Wiping your ApexNode server files is irreversible. Only enable it if you're sure you don't need anything currently on that server.

### Step 7. Start the import and wait for it to finish

Once everything looks right, start the import and wait for it to complete. Transfer time depends on how large your server is and your old host's connection speed.

When it's done, start your ApexNode server and confirm everything looks correct - worlds, mods, plugins, configs, and so on.

---

## A few things to keep in mind

- If the import fails to connect, re-check the server type, host, port, username, password, and base directory from your old host.
- Need help? Reach out on [Discord](https://apexnode.host/discord) or submit a [support ticket](https://dash.apexnode.host/tickets/create).

