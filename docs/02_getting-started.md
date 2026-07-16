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

Reference the main files in the `<head>` section of you HTML page:


```html
<script src="https://cdn.jsdelivr.net/npm/raffaello@1.7.1/dist/raffaello.min.js" data-license="abc123"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/raffaello@1.7.1/dist/raffaello.min.css">
```

:::tip[✅ Current version]

Current running version is <b>1.7.1</b>. We recommend using the latest for up to date performances.

:::

## License

To use RAFFAELLO, you need to acquire a license key. You can get one by contacting us at <a href="mailto:theo.francart@rts.ch">theo.francart@rts.ch</a>.


## Dependencies

- [cropper.js (1.x)](https://github.com/fengyuanchen/cropperjs/) ([API](https://github.com/fengyuanchen/cropperjs/blob/v1/README.md)), a custom library by **Fengyuan Chen**. This library builds the UI to allow the user to crop the input images.
- [mediabunny](https://github.com/Vanilagy/mediabunny), a library by **Vanilagy**. This library is used to read / encode mp4 videos, to allow using video as inputs in RAFFAELLO.
- [zip.js](https://github.com/gildas-lormeau/zip.js). This library is used to create and manipulate zip files.

The dependencies are already bundled within the `.min.js` and `.min.css` files.


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
