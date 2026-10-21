---
title: IP addresses
description: How ApexNode dedicated IP options are labeled - usable VLAN IP counts instead of raw CIDR-only names.
layout: default
parent: Dedicated Servers
nav_order: 5
---

# IP addresses

Dedicated configure screens show IP options by **how many usable IPs you get**, with the network size in parentheses.

Examples:

| What you see | Meaning |
|:-------------|:--------|
| **1 VLAN IP (/30)** | One usable address in a /30 block |
| **5 VLAN IPs (/29)** | Five usable addresses in a /29 block |
| **254 VLAN IPs (/30 + /24)** | Combined space (counts added from each block) |

Older upstream labels looked like `/30 + /24 IP Space`. We rewrite those so you do not have to decode CIDR math at checkout.

{: .note}
"Usable" here means host addresses you can assign in the usual way for that block size, not every address in the subnet (network and broadcast are not counted as usable hosts).

## Picking a size

- **1 VLAN IP** is enough for a single public service or primary SSH/HTTPS endpoint.
- Step up when you need extra public IPs for multiple sites, reverse proxies, or game listeners that bind per IP.
- Larger blocks cost more per month; options are listed cheapest first.

## After the server is ready

Your primary IP is in the ready email and in the [Cloud portal](https://cloud.apexnode.host). Extra IPs in a larger block are assigned according to how that product is provisioned; if you ordered more than one usable IP and do not see them, contact [support](https://dash.apexnode.host/tickets/create) with your service ID.

## PTR / reverse DNS

Need reverse DNS for mail or other services? Open a ticket with the IP and the hostname you want. Do not assume PTR is set automatically for every extra IP.
