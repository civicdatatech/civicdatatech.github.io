---
title: "OCDIDs Are Elegant. But Incomplete. Here's Why We're Fixing That."
date: "2026-06-08"
author: "Virginia Dooley"
excerpt: "OCDID identifiers are one of the best ways to represent government divisions programmatically. But they're limited without metadata. We're solving that."
slug: "OCDID-matching-challenge"
category: "technical"
status: "published"
---

# OCDIDs Are Elegant. But Incomplete. Here's Why We're Fixing That.

Here's the problem civic tech developers faces:

You grab a set of OCDIDs (Open Civic Data identifiers) to use in your application. Then you realize: **the data you need to map to an OCDID is held in another dataset**.

An OCDID is just an identifier. To unleash the potential of it, you need to fetch all the metadata that goes with it. You need to pull census data, government records, boundary shapefiles, and cross-reference them all. You end up in a quagmire just figuring out how to get them to match.

And then the next civic tech project does it all over again.

## A Strong Foundation 

[James Turk and the Open Civic Data effort came up with a brilliant idea 10+ years ago](https://open-civic-data-docs.readthedocs.io/en/latest/proposals/0002.html). He created a schema for representing government divisions that is genuinely elegant and useful.

[The nesting structure is recursive](https://open-civic-data.readthedocs.io/en/latest/ocdids.html). You can use it programmatically at any level: federal, state, local, district. It's one of the best representations of government jurisdiction that exists.

His design is powerful because **it's elegant and it's useful**.

But here's the catch: **building comprehensive civic applications requires coordinating multiple data sources**.

## The Solution Is Simple (But Not Easy)

The fix is straightforward: add the metadata layer. If you attach the right data to an OCDID, it becomes powerful. Suddenly, you have a complete representation of a government jurisdiction that you can use programmatically, recursively, and reliably.

That means developers stop wasting 4-5 months on the same tedious matching work. It means civic tech projects can launch faster. It means the ecosystem scales and the data becomes infrastructure as a public service.

## Why We're Taking This On

Civic Data Tech is working to make this happen because **we're in the quagmire right now**. We feel the pain. We understand the exact problem that this infrastructure needs to solve.

