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

It has a bundeled depedencie to [cropper.js](https://github.com/fengyuanchen/cropperjs/tree/main), a custom library by **Fengyuan Chen**, to reference input images and be able to crop them to size.

## How to use RAFFAELLO

Just reference the main files in the `<head>` section of you HTML page:


```html
<script src="https://cdn.jsdelivr.net/npm/raffaello@1.1.2/dist/raffaello.min.js" data-license="abc123"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/raffaello@1.1.2/dist/raffaello.min.css">
```

> ✅ Current running version is <b>1.1.2</b>. We recommend using the latest for up to date performances.

## Basic usage

RAFFAELLO is loaded on a static HTML file, so that the user loads it all when connecting the the page template, then fills the info and the image is created client-side.

The typical worklfow to use RAFFAELLO is:
1. Add all the necessary inputs in your HTML page
2. Add a JS script in which you:
    - Setup an instance of RAFFAELLO, which is equivalent to declaring a hidden blank `Canvas`.
    - Link all the HTML `Inputs` to the JS variables to make the images.
    - Draw on the canvas, with successives `Layers`.
    - Link the `Inputs` changes to specific `Layers` to be redrawn.

## Template structure

Here is the most basic structure you can get. 
This template will be a 1920x1080px image, with the right-half being a uniform red color, and the left-half a custom image input.

We'll only need the most basic structure with an image input.


```html
<!-- 
    ╔══════════╗
    ║   HTML   ║
    ╚══════════╝ 
-->
<div id="myContainer">
    <!-- Image Input container -->
    <div class="raffaello-imageContainer" style="width:400px; height 400px">
        <img class="raffaello-cropperContainer">
    </div>

    <!-- Preview image and Download -->
    <img class="js-previewImage" src="path/to/initial/preview.png">
    <input class="js-fileNameInput" type="text" placeholder="filename.jpg">
    <button class="js-downloadButton"></button>
</div>

<!-- 
    ╔════════════╗
    ║   SCRIPT   ║
    ╚════════════╝ 
-->
<script>
new class {
    constructor() {
        // Main container
        this.container = document.querySelector('#myContainer');

        // Main canvas (hidden)
        this.canvas = new Raffaello_Canvas({ 
            width: 1920,
            height: 1080,
            previewContainer: this.container.querySelector('.js-previewImage'),
            nameInputContainer: this.container.querySelector('.js-fileNameInput'),
        });

        // Image input
        this.inputImage = new Raffaello_ImageCropper( this.container, {
            width: 1920/2, // half
            height: 1080,
            layerIndex: 0,
            layerRef: this,
        });

        // Download interraction
        this.container.querySelector('.js-downloadButton').addEventListener('click', () => this.canvas.downloadImage());
    }

    // Drawing instructions
    initiateDrawing() {
        this.canvas.resetLayers();
        const thisTemplate = this;

        // LAYER 0 // IMAGE INPUT
        this.canvas.addLayer().draw(function() {
            this.drawImageInput(thisTemplate.inputImage, 0, 0);
            this.applyFilter(thisTemplate.inputImage.config.filter);   
        });

        // LAYER 1 // RED RECTANGLE
        this.canvas.addLayer().draw(function() {
            this.drawRect({
                x: 1920/2,
                y: 0,
                width: 1920/2,
                height: 1080,
                color: "rgb(187, 54, 54)",
            });
        });

        this.canvas.renderPreview();
    }
}
</script>
```

### HTML Structure

- **`myContainer`**
    - A `<div>` HTML element that contains all the following elements, it should be have a unique `id` identifier. (Beware of this, when you have multiple instances on a page.)
- **`raffaello-imageContainer`**: A `<div>` container of an image input. This is the element that will determine the size of the following cropper element.
    - **`raffaello-cropperContainer`**: An `<img>` image container that can be manipulated and cropped. Uses [cropper.js](https://github.com/fengyuanchen/cropperjs/tree/main), a custom library by **Fengyuan Chen**, to reference input images and crop them to custom size.
- '**`js-previewImage`**'
    - An `<img>` HTML element that will be updated with the rendered canvas.
- '**`js-fileNameInput`**'
    - An `<input>` HTML element that will determine the name of the newly created file when downloading.
- '**`js-downloadButton`**'
    - A `<button>` HTML element that will trigger the download process.

These elements are the most basic HTML structure you can get. All these will be present in 95% of your templates.
You can use any CSS workflow you desire to put in place these elements.

### JS Structure

To create a template with RAFFAELLO, once the HTML structure is here, you have to make a new unamed `class`

```javascript
new class {
    constructor() {
        // Main container, to be referenced later
        this.container = document.querySelector('#myContainer');

        // Main canvas
        this.canvas = new Raffaello_Canvas({ 
            // ...
        });

        // Image input (optionnal)
        this.inputImage = new Raffaello_ImageCropper( this.container, {
            // ...
        });

        // Interraction
        this.container.querySelector('.js-downloadButton').addEventListener('click', () => this.canvas.downloadImage());
    }

    // Drawing instructions
    initiateDrawing() {
        this.canvas.resetLayers();
        const thisTemplate = this;

        // LAYER 0
        this.canvas.addLayer().draw(function() {
            // Draw something
        });
        // LAYER 1
        this.canvas.addLayer().draw(function() {
            // Draw something
        });

        this.canvas.renderPreview();
    }
}
```

In this newly created `class`, you have to declare within the `contructor` the key elements:
- a `'this.container'` which is the main HTML `<div>` that contains all the others HTML element, like the cropper, or the other inputs.
- a `'this.canvas = new Raffaello_Canvas({...})'` which is the main canvas that will get rendered
- the interractions needed, like a `'this.inputImage'`.

Then you have to declare a function `initiateDrawing()` in which you will make all the drawing instructions.
All the successive layers have to be called separately, in the right order. See [layer ordering](#to-do).

The `initiateDrawing()` function allways follow this structure

```javascript
initiateDrawing() {
    this.canvas.resetLayers(); // To start by empting all the layers
    const thisTemplate = this; // To reference the template's scope within a draw()

    // All the layers draw()

    this.canvas.renderPreview(); // To make the render
}
```