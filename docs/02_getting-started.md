---
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
<script src="https://cdn.jsdelivr.net/npm/raffaello@1.4.0/dist/raffaello.min.js" data-license="abc123"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/raffaello@1.4.0/dist/raffaello.min.css">
```

:::tip[✅ Current version]

Current running version is <b>1.4.0</b>. We recommend using the latest for up to date performances.

:::


## Dependencies

**RAFFAELLO.js** has a depedency to the amazing [cropper.js](https://github.com/fengyuanchen/cropperjs/), a custom library by **Fengyuan Chen**. This library makes for the input images to be able to crop them.

The dependency is already bundled within the `.min.js` and `.min.css` files.


## Basic usage

The typical worklfow to use RAFFAELLO is:
1. Load RAFFAELLO in your HTML.
1. Add all the necessary `Inputs` in your HTML page. 
2. Add a JS `<script>` or load it. In this script you need to
    - Setup an instance of **RAFFAELLO**, which is equivalent to declaring the final `Canvas`.
    - Link all the HTML `Inputs` to the JS variables to make the images.
    - Draw on the `canvas`, with successives `Layers`.
    - Link the `Inputs` changes to specific `Layers` to be redrawn.

Next we will look at the basic sctructure you should follow to create your RAFFAELLO templates 🚀