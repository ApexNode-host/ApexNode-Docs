---
title: Project Zomboid Server Modding
description: How to install Steam Workshop mods on your ApexNode Project Zomboid server.
layout: default
parent: Project Zomboid Server Guides
---

# Project Zomboid Server Modding Guide

This guide covers the two most common ways to install mods for a Project Zomboid multiplayer server using Steam Workshop content.

{: .warning}
This guide only covers Steam Workshop mods. Manual mod installations are not supported.

---

## Choose Your Installation Method

1. **Recommended method:** configure mods locally, then copy generated values to the server
2. **Quick method:** manually paste Workshop IDs and Mod IDs directly into the server `.ini`

The recommended method is more reliable because it makes dependencies easier to include correctly.

---

## Optional: Disable Lua Checksum (Recommended)

Some players may be unable to join modded servers due to Lua checksum mismatches.

To prevent this:

1. In your server `.ini` file, find:
   `DoLuaChecksum=true`
2. Change it to:
   `DoLuaChecksum=false`
3. Save the file and restart the server

---

## Method 1: Quick Mod Installation (Manual IDs)

This method is faster, but it does **not** automatically handle dependencies. Use it if you are comfortable troubleshooting missing or invalid IDs.

{: .warning}
This method may cause mods to load incorrectly if required dependencies are missing.

---

### Step-by-Step

1. Open the Project Zomboid Workshop: [https://steamcommunity.com/app/108600/workshop/](https://steamcommunity.com/app/108600/workshop/)
2. For each mod, copy both values from its workshop page:
   - **Workshop ID**
   - **Mod ID**
3. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
4. Select your Project Zomboid server
5. Open **Files** and go to `.cache/Server`
6. Open the active server `.ini` file
7. Add IDs to the correct lines:
   - Append Mod IDs to `Mods=`
   - Append Workshop IDs to `WorkshopItems=`
8. Separate multiple entries with semicolons (`;`)
9. Save and restart the server

---

### Quick Method Notes

- Dependencies must be added **manually**
- Mods may appear as `[Not Found]` if IDs are missing or incorrect
- Double-check spelling, separators, and ID order
- Server restart is required for changes to take effect

---

## Method 2: Recommended Mod Installation (Local Config Sync)

This method takes longer up front but is more reliable for larger mod lists.

### Step 1: Subscribe to Mods on Steam

1. Open the Project Zomboid Steam Workshop:  
   [https://steamcommunity.com/app/108600/workshop/](https://steamcommunity.com/app/108600/workshop/)
2. Find the mod(s) you want to install and **subscribe** to them
3. Make sure to also subscribe to **all required dependencies** listed on the mod’s Workshop page

---

### Step 2: Configure a Local Host Profile

1. Launch **Project Zomboid** through Steam
2. _(Optional but recommended)_  
   Install **Better Server Settings** to simplify mod configuration: [https://steamcommunity.com/sharedfiles/filedetails/?id=2756434288](https://steamcommunity.com/sharedfiles/filedetails/?id=2756434288)
3. At the main menu, click **Host**
4. Click **Create New Settings**
5. Name it something easy to find (for example, `servertest`)

---

### Step 3: Add Mods in Host Settings

1. Open the **Mods** tab
2. Select all mods you want to use on the server
3. If workshop IDs do not auto-populate, add missing Workshop IDs manually
4. Once all mods are added, click **Save**

---

### Step 4: Open the Generated Local `.ini`

1. Open **File Explorer**
2. Navigate to:
   `C:\Users\<your_name>\Zomboid\Server`
3. Open the file:
   `servertest.ini`
4. Keep this file open - you’ll be copying values from it shortly

---

### Step 5: Open Your Server `.ini` in ApexNode

1. Log in to the ApexNode panel: [https://panel.apexnode.host](https://panel.apexnode.host)
2. Select your **Project Zomboid server**
3. Open the **Files** tab
4. Navigate to:
   `.cache/Server`
5. Open the `.ini` file your server is using
6. Confirm the filename in the **Startup** tab under **Server Name** if needed

---

### Step 6: Copy Required Lines

From your local `servertest.ini` file:

1. Copy the entire line starting with:
   `Mods=`
2. Paste it into the server `.ini`, **replacing** the existing `Mods=` line
3. Copy the entire line starting with:
   `WorkshopItems=`
4. Paste it into the server `.ini`, **replacing** the existing `WorkshopItems=` line
5. Save the file

---

### Step 7: Restart and Verify

Restart your Project Zomboid server.

During startup, you should see **Steam Workshop mods downloading** in the server console. Once startup completes, the mods will be active.

---

## Troubleshooting

1. Always restart after changing mod configuration
2. If a mod shows `[Not Found]`, verify Workshop ID and Mod ID
3. Confirm dependencies are installed for every major mod
4. Check separators in `Mods=` and `WorkshopItems=` (use `;`)

---

## Ready to play?

Don't have a Project Zomboid server yet?

[![Order Now](/apexnode_order_now.png)](https://apexnode.host/games/project-zomboid-server-hosting)
