---
title: Ordering a dedicated server
description: How to choose between ApexNode dedicated marketplace stock and configurable bare metal, then check out in the billing portal.
layout: default
parent: Dedicated Servers
nav_order: 1
---

# Ordering a dedicated server

You can browse machines on the [dedicated hosting page](https://apexnode.host/dedicated-server-hosting), then finish configure and checkout in the [billing portal](https://dash.apexnode.host). There are two paths.

## Marketplace (ready stock)

Pick a server that is already built and listed. You choose OS, control panel, RAID, network, and IP block, then check out.

- Typical setup time after payment: **about 24 hours**
- Best when you want a known CPU/RAM/disk combo without designing every part
- Start at [Dedicated Marketplace](https://dash.apexnode.host/dedicated/marketplace)

## Configurable (build your own)

Start from a CPU, then pick memory, drives, RAID, OS, control panel, network, IPs, and region.

- Setup may take **up to 72 hours** after payment (custom builds take longer than stock)
- Best when you need a specific RAM, drive, or location mix
- Start at [Configurable Servers](https://dash.apexnode.host/dedicated/configurable)

{: .note}
Configure options (memory, drives, OS, and so on) are sorted cheapest first where it makes sense. **No control panel** is the default when your OS allows it.

## What happens at checkout

1. Review the monthly total and hostname in the wizard.
2. Add to cart and pay through the billing portal.
3. You get an order-accepted email while we start setup. Login details come later when the server is ready. See [After you order](after-order).

{: .warning}
Dedicated servers are not managed through the [game panel](https://panel.apexnode.host). After setup you use the [Cloud portal](https://cloud.apexnode.host) and SSH. Game hosting still uses the game panel as usual.

## Tips before you order

- **Hostname:** Use a real hostname you control (for example `ns1.example.com`). You can change DNS later; pick something you will recognize on invoices.
- **Region:** Closer to your players or users usually means lower latency.
- **Control panel:** Only add cPanel, CloudLinux, or similar if you need them. See [Control panels and licenses](control-panels).
- **IPs:** Labels show how many usable VLAN IPs you get. See [IP addresses](ip-addresses).

Need help choosing? Ask in [Discord](https://apexnode.host/discord) or open a [support ticket](https://dash.apexnode.host/tickets/create).
