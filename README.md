# RAFFAELLO JavaScript Library 🦦

> ⚠️ This project is under proprietary license. 
<br>Source code is not publicly available. This repository is for documentation, usage examples, bug reports, feature requests, and general discussion.


RAFFAELLO is a comprehensive JavaScript library developped for RTS - Radio Television Suisse. It is a seamless solution for remote image creation. It is design to empower users to generate images on the fly, right from their web browser.

This documentation will cover the integration and usage of RAFFAELLO. From typical web application, focusing on specific use cases that demonstrates its features, to more niche solutions to enpower the users with unique abilities.

## Table of contents

- [Principle](#principle)
    - [What is it and why ?](#what-is-it-and-why)
    - [How it works](#how-it-works)
    - [Features](#features)
    - [Main files](#main-files)
    - [Basic usage](#basic-usage)
- [Getting started](#getting-started)
    - [How to use RAFFAELLO](#how-to-use-raffaello)
    - [Basic template structure](#basic-template-structure)
- [Specific Methods](#specific-methods)
    - [Layer manipulation](#layer-manipulation)
        - [Layer ordering](#layer-ordering)
        - [Reference another layer within a layer](#reference-another-layer-within-a-layer)
    - Image input
        - Filters
        - Restart
        - Watermark
    - Multiple image inputs
    - Text inputs
        - Custom fonts
        - Highlight text
        - Boundary system
    - Other inputs
        - Select / Radio / Checkbox / Sliders etc
        - Layer updates
    - Image manipulation
        - Add an image overlay
        - Blending modes
        - Alpha mode
        - Add a LUT
    - Other specific draw() methods
        - Draw a rectangle
        - Draw a gradient
        - Draw a star
        - Draw other shapes
    - Export options
        - File extensions
        - Transparency
    - Other add-ons
        - Persistent inputs
        - Full screen previews
- [Objects reference](#objects-reference)
    - [Raffaello_Canvas](#raffaello_canvas)
    - Raffaello_CanvasLayer
    - Raffaello_ImageCropper
    - Raffaello_BatchImageCropper
    - Raffaello_Image
    - Raffaello_Font
    - Raffaello_LUT
    - Raffaello_FullScreen
    - Raffaello_PersistentInputs
- [Browser support](#browser-support)
- [Authors and acknowledgment](#authors-and-acknowledgment)
- [License](#license)

[⬆ back to top](#table-of-contents)

# Principle

### What is it and why ?

The RAFFAELLO JavaScript library was developped to provide a suite of custom classes and objects for image template creation, manipulation and editing. Allowing users to use custom input images, apply filters, add graphical elements and perform various other editing tasks. 

### How it works

RAFFAELLO is an object-oriented augmented [`Canvas API`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) library with custom classes to fit it's specific need. It is written in Vanilla JS. 
The core method is that it creates dedicated `Canvas` HTML elements that you can then easilly manipulate and change on the go. Because it is based on Canvas, a widelly supported feature, all the processing happens on the client browser.
Based on an HTML template the user can create as many images as he needs.

The main addon of RAFFAELLO is that it mimics the way most design software works by having an architecture in layers, that renders atop of each others. 

```text
      RAFFAELLO CANVAS
     ╒════════════════╕
     │                │
   ╒═╧══════════════╕ │
   │ ┊              │ │
 ╒═╧══════════════╕ │ │ > LAYER 0
 │ ┊ └ ┉ ┉ ┉ ┉ ┉  │ ╞═╛
 │ ┊              │ │ > LAYER 1
 │ └ ┉ ┉ ┉ ┉ ┉ ┉  ╞═╛
 │                │ > LAYER 2
 ╘════════════════╛
```
This layer architecture has multiple advantages:
- `Effects` can be added indivudually on the layers and not blogbally.
- Drawing `Text` on a layer add dynamic `bound` properties to this layers, wich can be used to draw on another layer using `this.canvas.layers[x].bounds.minX` for exemple.
- It prevent the need to redraw all the canvas, just to update a small part of it.

### Features

- **Simplified inputs**: RAFFAELLO streamlines the image creation process by offering a simple set of inputs. Users fill in text content, adjust text fields, and upload images for seamless integration into the final design.

- **Intuitive UI**: Designed with simplicity in mind, it offers an intuitive UI that makes image creation effortless. With streamlined workflows and user-friendly controls, making visuals is a breeze for users of all skill levels.

- **Client-Side rendering**:  all image generation occurs client-side, without any server-side processing. This approach ensures fast and responsive performance, enabling users to preview and fine-tune their designs in real-time.

- **Seamless workflow**: Without the complexity of an image editing tool, RAFFAELLO offers a seamless workflow, where users can focus on editorial content without getting bogged down by technical details. Automatic adjustments and intelligent presets ensure a smooth and efficient design process.


### Main files

```text
raffaello/
    ├── raffaello.min.js
    └── raffaello.min.css
```

RAFFAELLO has 2 main files, `raffaello.min.js` and `raffaello.css`.

It has a depedencie to [cropper.js](https://github.com/fengyuanchen/cropperjs/tree/main), a custom library by **Fengyuan Chen**, to reference input images and be able to crop them to size. cropper.js has to be called separattely.

### Basic usage

RAFFAELLO is loaded on a static HTML file, so that the user loads it all when connecting the the page template, then fills the info and the image is created client-side.
<br>The typical worklfow to use RAFFAELLO is:
1. Add all the necessary inputs in your HTML page
2. Add a JS script in which you:
    - Setup an instance of RAFFAELLO, which is equivalent to declaring a hidden blank `Canvas`.
    - Link all the HTML `Inputs` to the JS variables to make the images.
    - Draw on the canvas, with successives `Layers`.
    - Link the `Inputs` changes to specific `Layers` to be redrawn.

[⬆ back to top](#table-of-contents)


# Getting started

## How to use RAFFAELLO

Just reference the main files in the `<head>` section of you HTML page using CDN.


```html
<!-- The latest version (recommanded) -->
<script src="https://cdn.jsdelivr.net/npm/raffaello/dist/raffaello.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/raffaello/dist/raffaello.min.css">
```

cdn.jsdelivr.net provides CDN support for RAFFAELLO.js's CSS and JavaScript.
You can use these links:
- https://cdn.jsdelivr.net/npm/raffaello/dist/raffaello.min.js
- https://cdn.jsdelivr.net/npm/raffaello/dist/raffaello.min.css

cdn.jsdelivr.net also handles version managment.

Then you can add all the inputs and script elements in you HTML `<body>`. 


## Basic template structure

Here is the most basic structure you can get. 
<br>This template will be a 1920x1080px image, with the right-half being a uniform red color, and the left-half a custom image input.

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
                color: "rgba(1,0,0,1)",
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
<br>You can use any CSS workflow you desire to put in place these elements.

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
<br>All the successive layers have to be called separately, in the right order. See [layer ordering](#to-do).

The `initiateDrawing()` function allways follow this structure

```javascript
initiateDrawing() {
    this.canvas.resetLayers(); // To start by empting all the layers
    const thisTemplate = this; // To reference the template's scope within a draw()

    // All the layers draw()

    this.canvas.renderPreview(); // To make the render
}
```

[⬆ back to top](#table-of-contents)
# Specific Methods

With the basic structure, we can now look at specific methods to achieve some specific targetted effects. The following chapter will go in the detail to explain all the necessary methods to make a template.

## Layer manipulation

### Layer ordering

```text
     RAFFAELLO CANVAS
     ╒══════════════╕
     │              │
   ╒═╧════════════╕ │
   │ ┊            │ │
 ╒═╧════════════╕ │ │ > LAYER 0
 │ ┊ └ ┉ ┉ ┉ ┉  │ ╞═╛
 │ ┊            │ │ > LAYER 1
 │ └ ┉ ┉ ┉ ┉ ┉  ╞═╛
 │              │ > LAYER 2
 ╘══════════════╛
```
---
### Reference another layer within a layer
---



---
---
---
---
---
---
---
---
---
---

https://www.npmjs.com/package/cropperjs/v/1.5.13
(ref pour l'écriture)


[⬆ back to top](#table-of-contents)

# Objects Reference

## Raffaello_Canvas

This is the main class that you should create, within the constructor of the global class. This will create the hidden canvas, the main structure, on wich you will add layers and render as a whole.

```javascript
// (Within the constructor of the global class)
this.canvas = new Raffaello_Canvas({ 
    width: 1920,
    height: 1080,
    previewContainer: this.container.querySelector('.js-previewImage'),
    nameInputContainer: this.container.querySelector('.js-fileNameInput'),
    previewQuality: 0.9, // (Optionnal) Default to '0.7'
    renderQuality: 0.96, // (Optionnal) Default to '0.96'
});
```

### Constructor Options

| Option | Type | Default | Description | 
| :----- | :--- | :------ | :---------- |
| `width` | `number` | `1000` | Width of the canvas (in pixels) |
| `height` | `number` | `1000` | Height of the canvas (in pixels) |
| `cornerRadius` | `number` | `0` | (Optionnal) The final image corner radius (in pixels). <br>Make sure the output is in PNG format to see it. |
| `previewContainer` | `HTML elem` | `null` | ... |
| `nameInputContainer` | `HTML elem` | `null` | ... |
| `previewQuality` | `number` | `0.8` | ... |
| `renderQuality` | `number` | `0.96` | ... |

### Initiated Properties

| Property | Type | Initial Value | Description | 
| :----- | :--- | :------ | :---------- |
| `this.layers` | `Array<Object>` | `[]` | The array containing all the `Raffaello_CanvasLayer` objects that will create the final image |


### Methods

---

#### `.addLayer(type = 'normal', style = null)`

The main method to a layer and add it to the parameter array `Raffaello_Canvas.layers`.

> Layer Ordering: Be mindful of the order in which layers are added on the canvas. <br>Layers are rendered in the sequence they are added, so theire order will affect the final output.

**Parameters:**

| Name     | Type   | Description  |
|----------|--------|--------------|
| 1. `'type'`  | `String` | The layer type. <br>`null` / `'normal'` / `'effect'` / `'alpha'` |
| 2. `'style'`  | `String` | The second parameter, when the type is defined `'effect'` |

**Returns:** a new instance of a `Raffaello_CanvasLayer`

The `type` is a parameter that will define the compositing operation to apply when drawing the layer, similar to a **blend style** fusion parameter. It defines the parameter **globalCompositeOperation** when drawing on the canvas, see the complete [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

- When the `'type'` is defined `null` or `'normal'`, the **blend style** is equivalent to 'normal'.
- When the `'type'` is defined `'effect'`, the **blend style** is equivalent to the second parameter `'style'`. It can take as a value all the available globalCompositeOperation properties. See [Blending modes](#to-do).
- When the `'type'` is defined `'alpha'`, the layer will only appear where the next layer will be drawn. See [Alpha mode](#to-do).

**Typical syntax:**

```javascript
// (Within the initiateDrawing() of the global class)

this.canvas.addLayer().draw(function() {
    // Draws with 'normal' blending mode
});
this.canvas.addLayer('effect', 'multiply').draw(function() {
    // Draws with 'multiply' blending mode
});
this.canvas.addLayer('alpha').draw(function() {
    // Drawing only appears where the next layer alpha is present
});
```


---

#### `.updateLayers(array)`

Description.

**Parameters:**

| Name     | Type   | Description                  |
|----------|--------|------------------------------|
| `array`  | `integer Array` | The layer to add to `this.layers` |

**Returns:** `void`



---
---
---
---
---
---
---
---
---
---



## Optionnal Elements

You can add some optionnal elements to enhance your drawings.

### Images FULLSCREEN

You can provide an option that let the user see the image in full screen. you should simply add at the root in your JS file:

```js
new Raffaello_FullScreen({ previewContainer: 'js-previewImage' });
```

- '**js-previewImage**' should be the class name used for the preview image.

### Add IMAGES to be used in drawImage()

You can reference external images using a `'Raffaello_Image'` class:

```js
// In the global scope
const img_custom = new Raffaello_Image({ url: 'path/to/image.png'});

// Or in the contructor() of a template
this.img_custom = new Raffaello_Image({ url: 'path/to/image.png'});

// Can be used later, like: 
this.canvas.addLayer().draw(function() {
    this.drawImage(img_custom.img, 0, 0); // for global loaded images
    this.drawImage(thisTemplate.img_custom.img, 0, 0); // for constructor() loaded images
});
```

### Add FONTS to be used in drawText()

You can reference a specific font, to be used in multiple layers on mulitple canvas, add at the root in your JS file:

```js
new Raffaello_Font({ name: 'myCustomName',  url: 'path/to/font.woff2'});

// an be used later, like: 
this.canvas.addLayer().draw(function() {
    this.drawText({
        // ...
        fontFamily: 'myCustomName',
        // ...
    });
});
```





# Browser support

#### Known issues

- **iOS filter limitation**: When using RAFFAELLO on iOS browser, the `filter` options are not working. This is due to the unsupported `CanvasRenderingContext2D.filter` property on Safari and Safari for iOS ([reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)).

[⬆ back to top](#table-of-contents)

# Authors and acknowledgment

- Project developped and coded by **Theo Francart** for **RTS - Radio Television Suisse**
- Use of the tool [cropper.js](https://github.com/fengyuanchen/cropperjs) from **Fengyuan Chen**.

# Licence

This project is proprietary and exclusively licensed. Any unauthorized use, copying, or commercial distribution is strictly prohibited without explicit permission from the project author.

[⬆ back to top](#table-of-contents)
