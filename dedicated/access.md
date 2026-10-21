---
title: First login and access
description: How to sign in to your ApexNode dedicated server via the Cloud portal and SSH after the ready email.
layout: default
parent: Dedicated Servers
nav_order: 3
---

# First login and access

Use this after you get the **server ready** email. If you only have the order-accepted email, wait until the machine is ready. See [After you order](after-order).

## Cloud portal

1. Open [cloud.apexnode.host](https://cloud.apexnode.host) and sign in with your ApexNode account.
2. Open your dedicated server from the list.
3. Confirm hostname, IP, and status look correct.

Billing changes (cancel, renew, invoices) stay in the [billing portal](https://dash.apexnode.host). The Cloud portal is for the running machine.

## SSH (Linux)

Most Linux installs use SSH as root (or the user noted in the ready email).

1. Copy the IP (or hostname) and password from the ready email.
2. From a terminal:

```bash
ssh root@YOUR_SERVER_IP
```

3. Paste the password when prompted (nothing will appear as you type; that is normal).
4. Change the root password after the first successful login.

{: .warning}
Change the default password as soon as you can. Store the new one somewhere safe. If you lose root access, open a [support ticket](https://dash.apexnode.host/tickets/create).

### Windows clients

Use [Windows Terminal](https://aka.ms/terminal), PowerShell, or an SSH client such as PuTTY. Connect to the same IP on port **22** unless your ready email says otherwise.

## Windows Server

If you ordered Windows Server, use Remote Desktop (RDP) with the details in the ready email (usually port **3389**). Enable Network Level Authentication only if you understand the tradeoffs; keep the admin password strong.

## Control panels

If you ordered **no control panel**, you manage the OS yourself over SSH or RDP.

If you ordered **cPanel**, **CloudLinux**, or similar, wait until the ready email arrives, then use the panel URL and license notes from setup. License billing is explained in [Control panels and licenses](control-panels).

## Firewalls and ports

Your first login should work on the default SSH or RDP port. If you lock yourself out with a firewall rule, contact support before making large firewall changes on a fresh box.

Stuck? [Discord](https://apexnode.host/discord) or a [support ticket](https://dash.apexnode.host/tickets/create) with your service ID helps us find the machine quickly.
