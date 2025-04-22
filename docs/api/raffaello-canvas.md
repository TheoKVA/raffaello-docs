---
sidebar_position: 1
---

# Raffaello_Canvas()

## Description

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

## Constructor Options

| Option | Type | Default | Description | 
| :----- | :--- | :------ | :---------- |
| `width` | `number` | `1000` | Width of the canvas (in pixels) |
| `height` | `number` | `1000` | Height of the canvas (in pixels) |
| `previewContainer` | `HTML_elem` | `null` | ... |
| `nameInputContainer` | `HTML_elem` | `null` | ... |
| `previewQuality` | `number` | `0.8` | ... |
| `renderQuality` | `number` | `0.96` | ... |
| `cornerRadius` | `number` | `0` | (Optionnal) The final image corner radius (in pixels). Make sure the output is in PNG format to see it. |

## Initiated Properties

| Property | Type | Initial Value | Description | 
| :----- | :--- | :------ | :---------- |
| `this.layers` | `Array<Object>` | `[]` | The array containing all the `Raffaello_CanvasLayer` objects that will create the final image |

Lorem ipsum dolor sit amet.

---

## Methods


### .addLayer()

#### `.addLayer(type = 'normal', style = null)`

The main method to a layer and add it to the parameter array `Raffaello_Canvas.layers`.

> Layer Ordering: Be mindful of the order in which layers are added on the canvas. Layers are rendered in the sequence they are added, so theire order will affect the final output.

**Parameters:**

| Name     | Type   | Description  |
|----------|--------|--------------|
| 1. `'type'`  | `String` | The layer type. `null` / `'normal'` / `'effect'` / `'alpha'` |
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

### .updateLayers()

#### `.updateLayers(array)`

Description.

**Parameters:**

| Name     | Type   | Description                  |
|----------|--------|------------------------------|
| `array`  | `integer Array` | The layer to add to `this.layers` |

**Returns:** `void`
