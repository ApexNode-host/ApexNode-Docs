---
title: Control panels and licenses
description: How ApexNode dedicated control panel options work - no panel by default, cPanel from-pricing, and CloudLinux invoiced later.
layout: default
parent: Dedicated Servers
nav_order: 4
---

# Control panels and licenses

When you configure a dedicated server, control panel choices depend on the OS you pick. Some options are free to include at checkout; some are licensed later.

## No control panel (default)

**No control panel** is listed first and is selected by default when your OS allows it.

- Monthly configure total does not add a panel license
- You manage the server with SSH (or RDP on Windows) and whatever software you install
- Best if you run your own stack, Docker, or a reverse proxy without a hosting panel

{: .note}
If you do not need cPanel or CloudLinux, leave **No control panel** selected. You can always ask support later about adding a panel on a rebuild (that may require a new order or reinstall).

## "From $X+/mo" (for example cPanel)

Some panels show a label like **cPanel** with price text such as **From $52+/mo**.

- Upstream often sends a **$0** monthly line for the panel at configure time
- We show **From $X+/mo** instead of **$0.00/mo** so the license floor is clear
- That amount is **not** baked into the configure monthly total as a fixed addon line
- After the server is live, the license is billed based on usage or the provider's license rules (the "from" price is a starting point, not always the final bill)

{: .warning}
If you only need SSH and your own apps, skip these panels. License fees can add up once the server is online.

## "Invoiced later" (for example CloudLinux)

Options marked **Invoiced later** (such as **CloudLinux**) work like this:

- Checkout monthly total stays at **$0** for that line
- The license is charged on a **later invoice** after provisioning, not as a prepaid cart line
- You still get the software installed (when compatible with your OS) as part of setup

Plan for that follow-up invoice if you select CloudLinux or similar.

## OS compatibility

Not every panel works with every OS. The configure UI filters control panels when you change the operating system. If a panel disappears, it is not available for that OS.

## Questions about a license charge

Check the ready email and your [billing portal](https://dash.apexnode.host) invoices first. If a license line looks wrong, open a [support ticket](https://dash.apexnode.host/tickets/create) with the service ID and a screenshot of the invoice line.
