---
title: Steam Workshop
description: How to browse, install, and manage Project Zomboid Steam Workshop mods from the ApexNode game panel.
layout: default
parent: Game Panel
nav_order: 5
---

# How to use Steam Workshop on your Project Zomboid server

The **Workshop** page in the game panel lets you find Project Zomboid Steam Workshop mods and collections, install them with dependencies, and manage load order - without editing `.ini` files by hand.

This feature is available on **Project Zomboid** servers when the Workshop page shows up in the server menu.

{: .note}
Prefer the older manual `.ini` method? See our [Project Zomboid modding guide](../../games/project_zomboid/modding/).

---

## Before you start

1. You need a **Project Zomboid** server on ApexNode
2. Start the server at least once so it can generate its config files
3. You'll need file access permissions to open Workshop and to install or remove mods

{: .warning}
Workshop changes are written to your server config (`Mods=`, `WorkshopItems=`, and map settings when needed). Always **restart the server** after installing, removing, or reordering mods so the content downloads and applies.

---

### Step 1. Login to our [game panel](https://panel.apexnode.host)

### Step 2. Select your Project Zomboid server

### Step 3. Click "Workshop" in the server menu

You'll see three tabs: **Browse**, **Collections**, and **Manage**.

---

## Browse

Use **Browse** to search the Project Zomboid Steam Workshop from the panel.

1. Search by name, or leave the search empty to browse
2. Sort by Most Popular, Newest, Trending, Recently Updated, or Relevance
3. Optionally filter by Workshop tags (for example Build 41 / Build 42, Map, Vehicles, Multiplayer)
4. Click install on the mod you want

When a Workshop item includes multiple Mod ID options, you'll be asked to pick the correct variant.

{: .success}
Dependencies are handled when possible. You usually don't need to add required mods one by one.

---

## Collections

Use **Collections** to install a whole Steam Workshop collection at once.

1. Open the **Collections** tab
2. Enter a SteamID64 if prompted (used to look up collections associated with that Steam account)
3. Search or open a collection by Workshop collection ID
4. Choose how to apply it:
   - **Add** - merge the collection into your current mod list
   - **Overwrite** - replace your current list with the collection

{: .warning}
Overwrite replaces your current Workshop mod list. Confirm carefully before continuing.

You can also install individual items from inside a collection if you don't want the whole set.

---

## Manage

Use **Manage** to review and edit what's already installed.

From this tab you can:

- See installed Workshop items, Mod IDs, and maps
- Reorder mods and maps (load order)
- Remove individual items, bulk-remove selected items, or clear everything
- Manually add a Workshop ID (and Mod ID / map folder when needed)

{: .note}
You need the **file update** permission to change mods on the Manage tab. If you can browse but can't install or edit, ask the server owner for that permission.

---

### Step 4. Restart your server

After any install, remove, or reorder:

1. Stop / restart the server from the console page
2. Watch the console for Steam Workshop download lines during startup
3. Once the server finishes starting, the mods should be active

---

## Optional: Disable Lua checksum

Some players can't join modded servers because of Lua checksum mismatches.

In your server `.ini` (under `.cache/Server`), set:

```
DoLuaChecksum=false
```

Save the file and restart the server.

---

## A few things to keep in mind

- Workshop is for **Project Zomboid** only right now.
- If the page says it can't find server settings, start the server once so the config is generated, then try again.
- Match Build 41 / Build 42 mods to the build your server is running.
- Mods that show as missing or fail to load usually mean a bad Mod ID, missing dependency, or a needed restart.
- Need help? Reach out on [Discord](https://apexnode.host/discord) or submit a [support ticket](https://dash.apexnode.host/tickets/create).
