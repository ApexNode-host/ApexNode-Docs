---
title: After you order
description: What emails to expect after ordering an ApexNode dedicated server, setup times, and when login details arrive.
layout: default
parent: Dedicated Servers
nav_order: 2
---

# After you order

Once payment goes through, setup starts automatically. You do **not** get root login details in the first email.

## Two emails (in order)

### 1. Order accepted / setup started

Sent from the billing portal shortly after you pay.

- Confirms we received the order and started provisioning
- **Marketplace:** expect setup within about **24 hours**
- **Configurable:** expect setup within up to **72 hours**

This message is not "your server is live." Treat it as a receipt and status update.

### 2. Server ready

Sent when the machine is online and credentials are available.

- Includes hostname, primary IP, and root (or access) details
- Points you to the [Cloud portal](https://cloud.apexnode.host)
- This is the email to save before you change passwords

{: .success}
Save the ready email (or copy the password into a password manager) before you log in and rotate credentials.

## Where to check status

| Place | What you see |
|:------|:-------------|
| [Billing portal](https://dash.apexnode.host) | Service, invoices, renewals |
| [Cloud portal](https://cloud.apexnode.host) | Server details once active (after the ready email) |

{: .note}
If the ready window has passed and you still have no ready email, check spam, then open a [support ticket](https://dash.apexnode.host/tickets/create) with your service or invoice ID.

## What we do not do

- We do not put your customer email into the upstream provider's notify fields. ApexNode sends the customer emails above.
- We do not activate game-panel access for dedicated bare metal. That panel is for game hosting only.

Next: [First login and access](access).
