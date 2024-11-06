---
title: "Customizing Your Glassy Blog"
pubDate: 2023-04-16
description: "Learn how to customize your Glassy blog template to make it truly yours"
author: "Glassy Team"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
tags: ["astro", "customization", "glassy"]
---

# Customizing Your Glassy Blog

One of the best features of the Glassy blog template is how easy it is to customize. In this post, we'll go through some simple ways to make your Glassy blog truly unique.

## Changing Colors

To change the color scheme of your blog, open the `src/layouts/Layout.astro` file and look for the `:root` CSS variables. Modify these values to create your own color palette:

```css
:root {
  --background-color: #f0f8ff;
  --text-color: #333;
  --glass-background: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}