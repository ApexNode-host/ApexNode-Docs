---
title: Minecraft Server Optimization
description: Improve your Minecraft server performance with JVM flags, server properties tweaks, and plugin recommendations.
layout: default
parent: Minecraft Server Guides
---

# Minecraft Server Optimization

Our Minecraft servers already include performance-focused JVM startup parameters by default.

This guide covers practical optimization steps you can apply after deployment.

---

## Quick Optimization Checklist

1. Keep your server version and software up to date
2. Avoid running both heavy plugin stacks and heavy mod stacks together
3. Remove unused plugins/mods regularly
4. Pre-generate world chunks when possible
5. Review logs for repeated warnings or ticking errors

---

## Server-Side Best Practices

### Reduce Tick Load

- Keep entity counts under control (farms, mobs, item drops)
- Limit always-on redstone clocks and large hopper systems
- Avoid extremely dense chunk loaders or automation builds

### Optimize View and Simulation Distances

- Lower view distance if TPS drops under load
- Lower simulation distance to reduce CPU work in active chunks

### Audit Addons

- Disable plugins/mods you are not actively using
- Replace known heavy addons with optimized alternatives
- Keep dependencies updated to reduce runtime issues

---

## Player-Facing Tips

- Recommend performance clients/mods to your community where appropriate
- Encourage players to use lower render distance in high-population areas
- Identify lag hotspots and set server rules for problematic farm designs

---

## When to Investigate Further

If you notice consistent lag, check:

1. Console/log errors tied to a specific plugin or mod
2. TPS degradation during player peak times
3. Recent mod/plugin installs before performance drops

Address one change at a time, then retest to confirm impact.

---

Don't have a Minecraft server yet? [Order one here](https://apexnode.host/games/minecraft-java-server-hosting).
