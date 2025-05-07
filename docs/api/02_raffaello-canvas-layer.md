# Raffaello_CanvasLayer

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

Main elements to draw on a **`Raffaello_Canvas`**. They should only be called via `Raffaello_Canvas.addLayer()` methods. This will ensure each layers are added accordingly to the `Raffaello_Canvas.layers` array.

`Raffaello_Canvas` should typically be initiated with `.addLayer()` methods within the **`templateInstructions()`** function of the **global class**.

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`new class {
    constructor() { 
        this.canvas = new Raffaello_Canvas({ ... });
    }

    templateInstructions() {
        // Capture the context of the template
        const thisTemplate = this;

        // LAYER 0
        // highlight-start
        this.canvas.addLayer().draw(function() {
            ... 
        });
        // highlight-end

        // LAYER 1
        // highlight-start
        this.canvas.addLayer().draw(function() {
            ... 
        });
        // highlight-end

        // ETC.
    }
}`}
</CodeBlock>

## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.canvas` | \<canvas\> | DOM canvas element that will hold all the drawings. |
| `this.context` | ctx | `this.canvas` 2D rendering context. Initiated with `getContext()`. |
| `this.width` | number | The canvas width |
| `this.height` | number | The canvas height |
| `this.isDrawn` | boolean | Returns `true` if the canvas has been drawn once |
| `this.bounds` | object | Reference the most extreme boudaries of the canvas |
| `this.bounds.minX` | number | Outer-right boundary coordinate |
| `this.bounds.maxX` | number | Outer-left boundary coordinate |
| `this.bounds.minY` | number | Outer-top boundary coordinate |
| `this.bounds.maxY` | number | Outer-bottom boundary coordinate |

```mdx-code-block
</APITable>
```

## Public Methods


### draw()

Method to pass the drawing instructions to the `Raffaello_Canvas.addLayer()`.

```javascript title="Usage"
this.canvas.addLayer().draw(function() {
    // Layer drawing instructions
});
```

**Parameters:**

```javascript
.addLayer(function)
```

| Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| *unamed*  | ✅ | `function` | *`{}`* | The drawing instructions for the layer. |

**Returns:** 

`void` — This method performs a side effect (add the drawing instructions to the layer). It does not return any value.

---

### drawText()

Method to draw text content upon a `Raffaello_Canvas.addLayer()`.

<CodeBlock className="small-code" language="javascript" title='Usage (Extended)'>
{`this.drawText({
    text: thisTemplate.container.querySelector('.js-textInput').value,
    fontFamily: 'RTSNeue-Medium',
    fontSize: 30,
    fontLineHeight: 34,       // (Optional) Default 'fontSize' value
    fontKerningOptical: true, // (Optional) Default false
    fontLetterSpacing: 0,     // (Optional) Default 0 // (in prct)
    fontFillColor: 'white',   // (Optional) Default 'white'
    textAlign: {              // (Optional)
        horizontal: 'left',   // Default 'left' // 'left' | 'center' | 'right'
        vertical: 'bottom',   // Default 'bottom' // 'top' | 'center' | 'bottom'
    },
    textBaseline: 'hanging',  // (Optional) Default 'alphabetic'
    anchorPoint: 'true',      // (Optional) Default 'none' // 'none' | 'true' | 'L'
    position: {
        x: 40,
        y: 1090,
        maxWidth: 0,              // (Optional) Default '0' // '0' means no limit
        maxWidthRescale: false,   // (Optional) Default false // false (means line break) | true (means rescale)
        maxLines: 0,              // (Optional) Default '0' // '0' means no limit
        ignoreEmptyLines: true,   // (Optional) Default true
        ignoreDoubleSpaces: true, // (Optional) Default true
    },
    bounds: [ true, false ],  // (Optional) Default [ true, true ] // [ include ascent?, include descent? ]
    highlight: {              // (Optional) Change style of text between '§'
        fontFamily: 'RTSNeueACTU-ExtraLight',
        fontSize: 30,
        fontLetterSpacing: 0,
        fontFillColor: 'white',
    },
    background: 'red',        // (Optional)
    background: {             // (Optional)
        color: 'red',         // (Optional) Default 'red'
        stroke: {             // (Optional) 
            style: "middle",  // Default 'middle' // 'middle' | 'inside' | 'outside'
            color: 'red',     // Default 'red'
            width: 0,
        },
        cornerRadius: 0,      // (Optional) Default 0
        margins: {            // (Optional)
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
    },
});
    this.applyFilter(
    'drop-shadow(0px 0px 60px rgb(0 0 0 / 70%))'
);`}
</CodeBlock>

**Parameters:**

```javascript
.drawText(config)
```

```mdx-code-block
<APITable>
```

| `config` Parameters          | Required | Type                 | Default        | Description |
| :--------------------------- | :------- | :------------------- | :------------- | :---------- |
| `text`                       | ✅       | HTMLElement / string | *`null`*       | The HTML element or text content to render. |
| `fontFamily`                 | ✅       | string               | *`null`*       | Font family used to render the text. |
| `fontSize`                   | ✅       | number               | *`null`*       | Size of the font in pixels. |
| `fontLineHeight`            | ❌       | number               | `fontSize`     | Line height, defaults to font size. |
| `fontKerningOptical`        | ❌       | boolean              | `false`        | Enables optical kerning if supported. |
| `fontLetterSpacing`         | ❌       | number               | `0`            | Letter spacing in percentage (e.g. 0 = default spacing). |
| `fontFillColor`             | ❌       | CSS color            | `white`        | Fill color of the text. |
| `textAlign.horizontal`      | ❌       | string               | `left`         | Horizontal alignment: `'left'` \| `'center'` \| `'right'`. |
| `textAlign.vertical`        | ❌       | string               | `bottom`       | Vertical alignment: `'top'` \| `'center'` \| `'bottom'`. |
| `textBaseline`              | ❌       | string               | `alphabetic`   | Canvas text baseline alignment (e.g. `'alphabetic'`). |
| `anchorPoint`               | ❌       | string               | `true`         | Anchor reference: `'none'` \| `'true'` \| `'L'`. |
| `position`                  | ✅       | object               | *`{}`*         | Object defining position and layout constraints. |
| `position.x`                | ✅       | number               | *`null`*       | X coordinate of the text position. |
| `position.y`                | ✅       | number               | *`null`*       | Y coordinate of the text position. |
| `position.maxWidth`         | ❌       | number               | `0`            | Max width in pixels. `0` means no limit. |
| `position.maxWidthRescale` | ❌       | boolean              | `false`        | If `true`, text will rescale to fit instead of breaking lines. |
| `position.maxLines`         | ❌       | number               | `0`            | Max number of lines. `0` means no limit. |
| `position.ignoreEmptyLines`| ❌       | boolean              | `true`         | Skip empty lines when rendering text. |
| `position.ignoreDoubleSpaces`| ❌     | boolean              | `true`         | Skip multiple consecutive spaces. |
| `bounds`                    | ❌       | array                | `[true, true]` | `[ include ascent?, include descent? ]`. |
| `highlight`                 | ❌       | object               | `undefined`    | Optional styling for text between `§` markers. |
| `highlight.fontFamily`      | ❌       | string               | Inherits       | Font family for highlighted segments. |
| `highlight.fontSize`        | ❌       | number               | Inherits       | Font size for highlighted segments. |
| `highlight.fontLetterSpacing`| ❌      | number               | Inherits       | Letter spacing for highlights. |
| `highlight.fontFillColor`   | ❌       | CSS color            | Inherits       | Fill color for highlights. |
| `background`                | ❌       | string / object      | `undefined`    | Background color or configuration object. |
| `background.color`          | ❌       | CSS color            | `'red'`        | Background fill color. |
| `background.stroke.style`   | ❌       | string               | `'middle'`     | Stroke placement: `'middle'` \| `'inside'` \| `'outside'`. |
| `background.stroke.color`   | ❌       | CSS color            | `'red'`        | Stroke color. |
| `background.stroke.width`   | ❌       | number               | `0`            | Stroke width. |
| `background.cornerRadius`   | ❌       | number               | `0`            | Corner radius. |
| `background.margins.top`    | ❌       | number               | `0`            | Top margin. |
| `background.margins.bottom` | ❌       | number               | `0`            | Bottom margin. |
| `background.margins.left`   | ❌       | number               | `0`            | Left margin. |
| `background.margins.right`  | ❌       | number               | `0`            | Right margin. |

```mdx-code-block
</APITable>
```

**Returns:** 

`void` — This method performs a side effect (draw text on the canvas). It does not return any value.

---

### drawImage()

custom version of `this.context.drawImage()` — same parameters as [CanvasRenderingContext2D: drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage), but with custom image type (`Raffaello_ImageCropper` or `Raffaello_Image`).

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`// Short (1 argument)
this.drawImage(thisTemplate.inputImage);

// Extended (3 arguments)
this.drawImage(thisTemplate.inputImage, 0, 0);

// Extended (5 arguments)
this.drawImage(thisTemplate.inputImage, 0, 0, 100, 100);`}
</CodeBlock>

> ⚠️ This method behaves like `CanvasRenderingContext2D.drawImage`, but also supports Raffaello images as input.

**Parameters:**

```javascript
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

```mdx-code-block
<APITable>
```

| Parameter     | Required | Type                                           | Default   | Description |
| :------------ | :------- | :--------------------------------------------- | :-------- | :---------- |
| `image`       | ✅       | `Raffaello_ImageCropper` / `Raffaello_Image` / `HTMLImageElement` | *`null`*  | The image-like object to draw. |
| `sx`          | ❌       | number                                         | `0`       | Source X: horizontal coordinate of the top-left corner of the sub-rectangle to draw from the source image. |
| `sy`          | ❌       | number                                         | `0`       | Source Y: vertical coordinate of the top-left corner of the sub-rectangle to draw. |
| `sWidth`      | ❌       | number                                         | *image width* | Width of the source sub-rectangle to draw. Defaults to full image width. |
| `sHeight`     | ❌       | number                                         | *image height* | Height of the source sub-rectangle to draw. Defaults to full image height. |
| `dx`          | ❌       | number                                         | `0`       | Destination X: horizontal position where to place the image on the canvas. |
| `dy`          | ❌       | number                                         | `0`       | Destination Y: vertical position on the canvas. |
| `dWidth`      | ❌       | number                                         | *sWidth*  | Width to draw the image on the canvas. Can scale it. |
| `dHeight`     | ❌       | number                                         | *sHeight* | Height to draw the image on the canvas. |

```mdx-code-block
</APITable>
```

**Returns:** 

`void` — This method performs a side effect (draw an image on the canvas). It does not return any value.

---

### drawRect()

This method wraps the canvas rectangle drawing functionality with simplified parameters and extras like corner radius and stroke alignment.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawRect({
    x: 0,            // Default 0
    y: 0,            // Default 0
    width: 100,      // Default 'this.canvas.width'
    height: 100,     // Default 'this.canvas.height'
    color: "black",  // (Optional) Default 'black'
    cornerRadius: 0, // (Optional) Default 0 // 5 || [5] | [5, 5] | [5, 10, 5, 10]
    stroke: {
        style: "middle", // (Optional) Default 'middle' // 'inside' | 'outside' | 'middle'
        width: 0,    // (Optional) Default 0
        color: "black", // (Optional) Default 'black'
    },
})`}
</CodeBlock>


> If no stroke is needed, we can omit the stroke object entirely.

**Parameters:**

```javascript
drawRect(config)
```

```mdx-code-block
<APITable>
```

| `config` Parameter      | Required | Type                       | Default              | Description |
| :---------------------- | :------- | :-------------------------- | :------------------- | :---------- |
| `x`                     | ❌       | number                     | `0`                  | X coordinate of the top-left corner of the rectangle. |
| `y`                     | ❌       | number                     | `0`                  | Y coordinate of the top-left corner of the rectangle. |
| `width`                 | ❌       | number                     | `canvas.width`       | Width of the rectangle in pixels. |
| `height`                | ❌       | number                     | `canvas.height`      | Height of the rectangle in pixels. |
| `color`                 | ❌       | CSS color                  | `'black'`            | Fill color of the rectangle. |
| `cornerRadius`          | ❌       | number \| array            | `0`                  | Border radius in pixels. Can be a single value (`5`), or array: `[5]`, `[5, 5]`, `[5, 10, 5, 10]`. |
| `stroke.style`          | ❌       | string                     | `'middle'`           | Stroke alignment: `'inside'`, `'outside'`, or `'middle'`. |
| `stroke.width`          | ❌       | number                     | `0`                  | Stroke width in pixels. |
| `stroke.color`          | ❌       | CSS color                  | `'black'`            | Stroke color of the rectangle. |

```mdx-code-block
</APITable>
```

**Returns:** 

`void` — This method performs a side effect (draw on the canvas). It does not return any value.

---

### drawStar()

This method draws a star centered on (`x_center`, `y_center`) with alternating inner and outer points.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawStar({
    x_center: 0,
    y_center: 0,
    spikes: 5,
    color: "red",
    outerRadius: 100,
    innerRadius: 150,
})`}
</CodeBlock>

The number of `spikes` determines how many points the star will have (e.g. `5` = typical star). You can customize the shape with `outerRadius` and `innerRadius` for sharper or rounder stars.

**Parameters:**

```javascript
drawStar(config)
```

```mdx-code-block
<APITable>
```

| `config` Parameters | Required | Type     | Default   | Description |
| :-------------- | :------- | :--------| :-------- | :---------- |
| `x_center`      | ✅       | number   | *`null`*  | X coordinate of the star's center. |
| `y_center`      | ✅       | number   | *`null`*  | Y coordinate of the star's center. |
| `spikes`        | ✅       | number   | *`null`*  | Number of spikes (points) the star should have. |
| `outerRadius`   | ✅       | number   | *`null`*  | Radius of the outer tips of the star. |
| `innerRadius`   | ✅       | number   | *`null`*  | Radius of the inner dips between star points. |
| `color`         | ❌       | CSS color | `'red'`   | Fill color of the star shape. |

```mdx-code-block
</APITable>
```
**Returns:** 

`void` — This method performs a side effect (draw on the canvas). It does not return any value.

---

### drawGradient()

This method simplifies `createLinearGradient()` by automatically calculating the start and end points based on the bounding rectangle and angle.


<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawGradient({
    x: 10,       // (Optional) Default 0
    y: 10,       // (Optional) Default 0
    width: 90,   // (Optional) Default 100
    height: 80,  // (Optional) Default 100
    angle: 0,    // (Optional) Default 0 // (in deg, clockwise) 0 (upward) to 360
    gradient: [  // (Optional) Default from '0% black' to '100% black'
        [0.0, 'rgba(0,0,0, 0)'], // 0.0 - Start
        [1.0, 'rgba(0,0,0, 0.8)'], // 1.0 - End
    ],
})`}
</CodeBlock>

The `gradient` array defines color stops just like in native canvas, but easier to write.

**Parameters:**

```javascript
drawGradient(config)
```

```mdx-code-block
<APITable>
```

| `config` Parameters    | Required | Type             | Default                   | Description |
| :------------ | :------- | :----------------| :-------------------------| :---------- |
| `x`           | ❌       | number           | `0`                       | X coordinate of the top-left corner of the gradient area. |
| `y`           | ❌       | number           | `0`                       | Y coordinate of the top-left corner of the gradient area. |
| `width`       | ❌       | number           | `100`                     | Width of the gradient rectangle. |
| `height`      | ❌       | number           | `100`                     | Height of the gradient rectangle. |
| `angle`       | ❌       | number (degrees) | `0`                       | Angle of the gradient in degrees, clockwise. `0` means vertical (top to bottom), `90` is left to right, etc. |
| `gradient`    | ❌       | array            | `[[0, 'black'], [1, 'black']]` | Array of gradient stops: each stop is a tuple `[offset, color]`, where offset is between `0.0` and `1.0`. |


```mdx-code-block
</APITable>
```
**Returns:** 

`void` — This method performs a side effect (draw on the canvas). It does not return any value.

---

### prepareFilter()

Coming soon.

```javascript

```

---

### applyFilter()

Coming soon.

```javascript
this.applyFilter(`drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))`);
```

---

### applyLUT()

Coming soon.

```javascript

```
