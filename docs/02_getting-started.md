---
sidebar_position: 2
title: Getting Started
description: Introduction page
---

# Getting started


## Main files

```text
raffaello/
    ├── raffaello.min.js
    └── raffaello.min.css
```

RAFFAELLO has 2 main files, `raffaello.min.js` and `raffaello.min.css`.

## How to use RAFFAELLO

Just reference the main files in the `<head>` section of you HTML page:


```html
<script src="https://cdn.jsdelivr.net/npm/raffaello@1.2.0/dist/raffaello.min.js" data-license="abc123"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/raffaello@1.2.0/dist/raffaello.min.css">
```

> ✅ Current running version is <b>1.2.0</b>. We recommend using the latest for up to date performances.


## Dependencies

**RAFFAELLO.js** has a depedency to the amazing [cropper.js](https://github.com/fengyuanchen/cropperjs/), a custom library by **Fengyuan Chen**, to reference input images and be able to crop them to size.

The dependency is bundled within the `.min.js` and `.min.css` files.


## Basic usage

RAFFAELLO is loaded on a static HTML file, so that the user loads it all when connecting the the page template, then fills the info and the image is created client-side.

The typical worklfow to use RAFFAELLO is:
1. Add all the necessary inputs in your HTML page
2. Add a JS script in which you:
    - Setup an instance of RAFFAELLO, which is equivalent to declaring a hidden blank `Canvas`.
    - Link all the HTML `Inputs` to the JS variables to make the images.
    - Draw on the canvas, with successives `Layers`.
    - Link the `Inputs` changes to specific `Layers` to be redrawn.
