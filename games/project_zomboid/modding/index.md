---
title: Project Zomboid Server Modding
layout: default
parent: Project Zomboid Server Guides
---

# Project Zomboid Server Modding Guide

This guide explains the **recommended and most reliable method** for installing Project Zomboid mods on a multiplayer server using the **Steam Workshop**.

{: .warning}
This guide only covers Steam Workshop mods. Manual mod installations are not supported.

---

## Overview

Project Zomboid server mods are configured using a server `.ini` file.  
The easiest way to ensure correct Mod IDs and Workshop IDs is by **configuring the mods locally first**, then copying the generated values to your server.

---

## Optional: Disable Lua Checksum (Recommended)

Some players may be unable to join modded servers due to Lua checksum mismatches.

To prevent this:

1. In your server `.ini` file, find:
   DoLuaChecksum=true
2. Change it to:
   DoLuaChecksum=false

3. Save the file and restart the server

---

# Quick Mod Installation (Manual IDs)

This method is faster and more hands-on, but **does not automatically handle mod dependencies**. It is best suited for experienced server owners who are comfortable troubleshooting missing mods.

{: .warning}
This method may cause mods to load incorrectly if required dependencies are missing.

---

### Steps

1. Browse the Project Zomboid Steam Workshop and find the mods you want to install  
   https://steamcommunity.com/app/108600/workshop/

2. On each mod’s Workshop page, locate and copy:
   - **Workshop ID**
   - **Mod ID**

3. Log in to the ApexNode panel and select your Project Zomboid server

4. Open the **Files** tab and navigate to:
   .cache/Server

5. Open the server `.ini` file your server is using
   - You can confirm the file name in the **Startup** tab under the **Server Name** parameter

6. Add the copied IDs to the appropriate lines:
   - Append Mod IDs to the `Mods=` line
   - Append Workshop IDs to the `WorkshopItems=` line

   Separate multiple entries with semicolons (`;`)

7. Save the file and restart your server

---

### Important Notes

- Dependencies must be added **manually**
- Mods may appear as `[Not Found]` if IDs are missing or incorrect
- Always double-check spelling and separators
- Server restart is required for changes to take effect

---

# The 'slow' yet recommended way of adding mods.

## Step 1: Subscribe to Mods on Steam

1. Open the Project Zomboid Steam Workshop:  
   https://steamcommunity.com/app/108600/workshop/

2. Find the mod(s) you want to install and **subscribe** to them

3. Make sure to also subscribe to **all required dependencies** listed on the mod’s Workshop page

---

## Step 2: Launch Project Zomboid Locally

1. Launch **Project Zomboid** through Steam

2. _(Optional but recommended)_  
   Install **Better Server Settings** to simplify mod configuration:  
   https://steamcommunity.com/sharedfiles/filedetails/?id=2756434288

3. At the main menu, click **Host**

4. Click **Create New Settings**
   - We recommend naming it `servertest`

---

## Step 3: Configure Mods in Host Settings

1. Open the **Mods** tab
2. Select all mods you want to use on the server

- If using **Better Server Settings**, the **Steam Workshop** tab should auto-populate
- If not, manually add the **Workshop IDs** for each mod

3. Once all mods are added, click **Save**

---

## Step 4: Copy Mod Configuration File

1. Open **File Explorer**
2. Navigate to:
   C:\Users<your_name>\Zomboid\Server
3. Open the file:
   servertest.ini

4. Keep this file open — you’ll be copying values from it shortly

---

## Step 5: Apply Mods to Your Server

1. Log in to the ApexNode panel:  
   https://panel.apexnode.host

2. Select your **Project Zomboid server**

3. Open the **Files** tab

4. Navigate to:
   .cache/Server

5. Open the `.ini` file your server is using
   - You can confirm the correct file name in the **Startup** tab under the **Server Name** parameter

---

## Step 6: Copy Required Lines

From your local `servertest.ini` file:

1. Copy the entire line starting with:
   Mods=
2. Paste it into the server `.ini`, **replacing** the existing `Mods=` line

3. Copy the entire line starting with:
   WorkshopItems=

4. Paste it into the server `.ini`, **replacing** the existing `WorkshopItems=` line

5. Save the file

---

## Step 7: Restart the Server

Restart your Project Zomboid server.

During startup, you should see **Steam Workshop mods downloading** in the server console. Once startup completes, the mods will be active.

---

## Final Notes

- Always restart the server after changing mods
- Double-check mod dependencies if a mod fails to load
- If a mod shows as `[Not Found]`, verify:
  - Workshop ID
  - Mod ID
  - Dependency mods are installed
