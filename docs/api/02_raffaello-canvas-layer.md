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
| `this.parent` | `Raffaello_Canvas` | The parent object to which the layer belongs. |
| `this.index` \| `this.idx` | integer | The current layer index. |
| `this.canvas` | \<canvas\> | DOM canvas element that will hold the drawing of current layer. |
| `this.context` | ctx | `this.canvas` 2D rendering context. Initiated with `getContext()`. |
| `this.ctx` | ctx | alias of `this.context`. |
| `this.width` | number | The canvas width (in pixels). Default is the parent canvas width. |
| `this.height` | number | The canvas height (in pixels). Default is the parent canvas height. |
| `this.bounds` | object | Reference the most extreme boudaries of the canvas. |
| `this.bounds.minX` | number | Outer-right boundary coordinate. Updates when the canvas is drawn using `drawRect()`, `drawText()`, etc. Default is `null`. |
| `this.bounds.maxX` | number | Outer-left boundary coordinate. Updates when the canvas is drawn using `drawRect()`, `drawText()`, etc. Default is `null`. |
| `this.bounds.minY` | number | Outer-top boundary coordinate. Updates when the canvas is drawn using `drawRect()`, `drawText()`, etc. Default is `null`. |
| `this.bounds.maxY` | number | Outer-bottom boundary coordinate. Updates when the canvas is drawn using `drawRect()`, `drawText()`, etc. Default is `null`. |
| `this.text` | string | If text was drawn onto the layer using `drawText()`, this will hold the text. |

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
| *unamed* | ✅ | `function` | *`{}`* | The drawing instructions for the layer. |

**Returns:** 

`void` - This method performs a side effect (add the drawing instructions to the layer). It does not return any value.

---

### drawText()

Method to draw text content upon a `Raffaello_Canvas.addLayer()`.

<CodeBlock className="small-code" language="javascript" title='Usage (Extended)'>
{`this.drawText({
    text: thisTemplate.container.querySelector('.js-textInput').value,
    fontFamily: 'RTSNeue-Medium',
    fontSize: 30,
    fontLineHeight: 34,       // Default 'fontSize' value
    fontKerningOptical: true, // Default false
    fontLetterSpacing: 0,     // Default 0 // (in prct)
    fontFillColor: 'white',   // Default 'white'
    textAlign: {
        horizontal: 'left',   // Default 'left' // 'left' | 'center' | 'right'
        vertical: 'bottom',   // Default 'bottom' // 'top' | 'center' | 'bottom'
    },
    textBaseline: 'hanging',  // Default 'alphabetic'
    anchorPoint: 'true',      // Default 'none' // 'none' | 'true' | 'L'
    position: {
        x: 40,
        y: 1090,
        maxWidth: 0,              // Default 0 // 0 means no limit
        maxWidthRescale: false,   // Default false // 'false' (means line break) | 'true' (means rescale)
        maxLines: 0,              // Default 0 // 0 means no limit
        ignoreEmptyLines: true,   // Default true
        ignoreDoubleSpaces: true, // Default true
    },
    opacity: 1,               // Default 1
    bounds: [ true, false ],  // Default [ true, true ] // [ include ascent?, include descent? ]
    highlight: {              // (Optional) // Change style of text between '§' markers
        fontFamily: 'RTSNeueACTU-ExtraLight',
        fontSize: 30,
        fontLetterSpacing: 0,
        fontFillColor: 'white',
    },
    background: {             // (Optional) // Draw background box behind text
        color: 'red',         // Default 'red'
        opacity: 1,           // Default 1
        stroke: {             
            style: "middle",  // Default 'middle' // 'middle' | 'inside' | 'outside'
            color: 'red',     // Default 'red'
            width: 0,         // Default 0
            opacity: 1,       // Default 1 // Override background opacity if specified
        },
        cornerRadius: 0,      // Default 0
        padding: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
    },
});`}
</CodeBlock>

**Parameters:**

```javascript
.drawText(config)
```

```mdx-code-block
<APITable>
```
| `config` Parameters | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `text` | ✅ | HTMLElement / string | *`null`* | The HTML element or text content to render. |
| `fontFamily` | ✅ | string | *`null`* | Font family used to render the text. |
| `fontSize` | ✅ | number | *`null`* | Size of the font (in pixels). |
| `fontLineHeight` | ❌ | number | `fontSize` | Line height, defaults to font size. |
| `fontKerningOptical` | ❌ | boolean | `false` | Enables optical kerning if supported. |
| `fontLetterSpacing` | ❌ | number | `0` | Letter spacing in percentage (e.g. 0 = default spacing). |
| `fontFillColor`| ❌ | CSS color | `white` | Fill color of the text. |
| `textAlign.horizontal`| ❌ | string | `left` | Horizontal alignment: `'left'` \| `'center'` \| `'right'`. |
| `textAlign.vertical` | ❌ | string | `bottom` | Vertical alignment: `'top'` \| `'center'` \| `'bottom'`. |
| `textBaseline` | ❌ | string | `alphabetic` | Canvas text baseline alignment (e.g. `'alphabetic'`, [see reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline)). |
| `anchorPoint` | ❌ | string | `true` | Anchor reference: `'none'` \| `'true'` \| `'L'`. |
| `position` | ✅ | object | *`{}`* | Object defining position and layout constraints. |
| `position.x` | ✅ | number | *`null`* | X coordinate of the text position. |
| `position.y` | ✅ | number | *`null`* | Y coordinate of the text position. |
| `position.maxWidth` | ❌ | number | `0` | Max width in pixels. `0` means no limit. |
| `position.maxWidthRescale` | ❌ | boolean | `false` | If `true`, text will rescale to fit instead of breaking lines. |
| `position.maxLines` | ❌ | number | `0` | Max number of lines. `0` means no limit. |
| `position.ignoreEmptyLines`| ❌ | boolean | `true` | Skip empty lines when rendering text. |
| `position.ignoreDoubleSpaces`| ❌ | boolean | `true` | Skip multiple consecutive spaces. |
| `opacity`| ❌ | number | `1` | Opacity of the drawn text (`0` to `1`) |
| `bounds` | ❌ | array | `[true, true]` | `[ include ascent?, include descent? ]`. |
| `highlight` | ❌ | object | `undefined` | Optional styling for text between `§` markers. |
| `highlight.fontFamily`| ❌ | string | Inherits | Font family for highlighted segments. |
| `highlight.fontSize` | ❌ | number | Inherits | Font size for highlighted segments. |
| `highlight.fontLetterSpacing`| ❌| number | Inherits | Letter spacing for highlights. |
| `highlight.fontFillColor` | ❌ | CSS color | Inherits | Fill color for highlights. |
| `background` | ❌ | object| `undefined` | Background configuration object. |
| `background.color` | ❌ | CSS color | `'red'` | Background fill color. |
| `background.stroke.style` | ❌ | string | `'middle'` | Stroke placement: `'middle'` \| `'inside'` \| `'outside'`. |
| `background.stroke.color` | ❌ | CSS color | `'red'` | Stroke color. |
| `background.stroke.width` | ❌ | number | `0` | Stroke width (in pixels). |
| `background.cornerRadius` | ❌ | number | `0` | Corner radius (in pixels). |
| `background.padding.top` | ❌ | number | `0` | Top margin (in pixels). |
| `background.padding.bottom` | ❌ | number | `0` | Bottom margin (in pixels). |
| `background.padding.left` | ❌ | number | `0` | Left margin (in pixels). |
| `background.padding.right` | ❌ | number | `0` | Right margin (in pixels). |
```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw text on the canvas). It does not return any value.

---

### drawImage()

custom version of `this.context.drawImage()` - same parameters as [CanvasRenderingContext2D: drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage), but with custom image type (`Raffaello_ImageCropper` or `Raffaello_Image`).

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
drawImage(image)
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

```mdx-code-block
<APITable>
```
| Parameter | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `image` | ✅ | `Raffaello_ImageCropper` \| `Raffaello_Image` \| `HTMLImageElement` | *`null`* | The image-like object to draw. |
| `sx` | ❌ | number | `0` | Source X: horizontal coordinate of the top-left corner of the sub-rectangle to draw from the source image (in pixels). |
| `sy` | ❌ | number | `0` | Source Y: vertical coordinate of the top-left corner of the sub-rectangle to draw (in pixels). |
| `sWidth`| ❌ | number | *image width* | Width of the source sub-rectangle to draw. Defaults to full image width (in pixels). |
| `sHeight` | ❌ | number | *image height* | Height of the source sub-rectangle to draw. Defaults to full image height (in pixels). |
| `dx` | ❌ | number | `0` | Destination X: horizontal position where to place the image on the canvas (in pixels). |
| `dy` | ❌ | number | `0` | Destination Y: vertical position on the canvas (in pixels). |
| `dWidth`| ❌ | number | *sWidth* | Width to draw the image on the canvas. Can scale it (in pixels). |
| `dHeight` | ❌ | number | *sHeight* | Height to draw the image on the canvas (in pixels). |
```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw an image on the canvas). It does not return any value.

---

### drawRect()

This method wraps the canvas rectangle drawing functionality with simplified parameters and extras like corner radius and stroke alignment.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawRect({
    x: 0,            // Default 0
    y: 0,            // Default 0
    width: 100,      // Default 'this.canvas.width'
    height: 100,     // Default 'this.canvas.height'
    color: "black",  // Default 'black'
    opacity: 1,      // Default 1
    cornerRadius: 0, // Default 0 // 5 || [5] | [5, 5] | [5, 10, 5, 10]
    stroke: {
        style: "middle", // Default 'middle' // 'inside' | 'outside' | 'middle'
        width: 0,        // Default 0
        color: "black",  // Default 'black'
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

| `config` Parameter | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `x`| ❌ | number | `0` | X coordinate of the top-left corner of the rectangle (in pixels). |
| `y`| ❌ | number | `0` | Y coordinate of the top-left corner of the rectangle (in pixels). |
| `width` | ❌ | number | `canvas.width` | Width of the rectangle (in pixels). |
| `height` | ❌ | number | `canvas.height`| Height of the rectangle (in pixels). |
| `color` | ❌ | CSS color | `'black'` | Fill color of the rectangle. |
| `opacity`| ❌ | number | `1` | Opacity of the drawn rectangle (`0` to `1`) |
| `cornerRadius` | ❌ | number \| array | `0` | Border radius (in pixels). Can be a single value (`5`), or array: `[5]`, `[5, 5]`, `[5, 10, 5, 10]`. |
| `stroke.style` | ❌ | string| `'middle'` | Stroke alignment: `'inside'`, `'outside'`, or `'middle'`. |
| `stroke.width` | ❌ | number | `0` | Stroke width (in pixels). |
| `stroke.color` | ❌ | CSS color | `'black'` | Stroke color of the rectangle. |

```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---

### drawGradient()

This method simplifies `createLinearGradient()` by automatically calculating the start and end points based on the bounding rectangle and angle.


<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawGradient({
    x: 10,       // Default 0
    y: 10,       // Default 0
    width: 90,   // Default 100
    height: 80,  // Default 100
    angle: 0,    // Default 0 // (in deg, clockwise) 0 (upward) to 360
    gradient: [  // Default from '0% black' to '100% black'
        [0.0, 'rgba(0,0,0, 0)'], // 0.0 - Start
        [1.0, 'rgba(0,0,0, 0.8)'], // 1.0 - End
    ],
    opacity: 1,  // Default 1
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

| `config` Parameters | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `x` | ❌ | number | `0` | X coordinate of the top-left corner of the gradient area (in pixels). |
| `y` | ❌ | number | `0` | Y coordinate of the top-left corner of the gradient area (in pixels). |
| `width` | ❌ | number | `canvas.width` | Width of the gradient rectangle (in pixels). |
| `height`| ❌ | number | `canvas.height` | Height of the gradient rectangle (in pixels). |
| `angle` | ❌ | number (degrees) | `0` | Direction of the gradient in degrees, clockwise. `0` is bottom to top, `90` is left to right, `180` is top to bottom, etc. |
| `gradient` | ❌ | array | `[[0, 'black'], [1, 'black']]` | Array of gradient stops: each stop is a tuple `[offset, color]`, where offset is between `0.0` and `1.0`. |
| `opacity` | ❌ | number | `1` | Opacity of the drawn rectangle (`0` to `1`) |


```mdx-code-block
</APITable>
```
**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---


### drawStar()

This method draws a star centered on (`x_center`, `y_center`) with alternating inner and outer points.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.drawStar({
    x_center: 0,
    y_center: 0,
    spikes: 5,
    outerRadius: 100,
    innerRadius: 150,
    color: "red", // Default 'red'
    opacity: 1,   // Default 1
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

| `config` Parameters | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `x_center` | ✅ | number | *`null`* | X coordinate of the star's center (in pixels). |
| `y_center`| ✅ | number | *`null`* | Y coordinate of the star's center (in pixels). |
| `spikes`| ✅ | number | *`null`* | Number of spikes (points) the star should have. |
| `outerRadius` | ✅ | number | *`null`* | Radius of the outer tips of the star (in pixels). |
| `innerRadius` | ✅ | number | *`null`* | Radius of the inner dips between star points (in pixels). |
| `color` | ❌ | CSS color | `'red'` | Fill color of the star shape. |
| `opacity` | ❌ | number | `1`| Opacity of the drawn star (`0` to `1`) |

```mdx-code-block
</APITable>
```
**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---

### applyFilter()

Apply a CSS-like filter to the current canvas context. This uses the same syntax as the CSS `filter` property, but is applied to the entire canvas as it was drawn. All the following filter functions are supported: `blur()`, `brightness()`, `contrast()`, `drop-shadow()`, `grayscale()`, `hue-rotate()`, `invert()`, `opacity()`, `saturate()`.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.applyFilter('drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))');`}
</CodeBlock>

**Parameters:**

```javascript
applyFilter(filter)
```

```mdx-code-block
<APITable>
```
| # | Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `filter` | ✅ | string | *`null`* | CSS-like filter string to apply to the canvas (e.g. `'blur(5px) brightness(150%)'`). |
```mdx-code-block
</APITable>
```


**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---

### prepareFilter()

Prepare a CSS-like filter for the current canvas context. Same as `applyFilter()` but used before drawing.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.prepareFilter('drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))');`}
</CodeBlock>

**Parameters:**

```javascript
prepareFilter(filter)
```

```mdx-code-block
<APITable>
```
| # | Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `filter` | ✅ | string | *`null`* | CSS-like filter string to apply to the canvas (e.g. `'blur(5px) brightness(150%)'`). |
```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---

### blur()

Apply a blur filter to the current canvas context. The normal `blur()` filter blur the edges also within the inside of the canvas. This methods allows to apply a blur that does not affect the edges, by keeping them sharp.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`
    this.blur('5px');
`}
</CodeBlock>

**Parameters:**

```javascript
blur(radius, keepEdges = true)
```

```mdx-code-block
<APITable>
```
| # | Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `radius` | ✅ | number or string | *`null`* | The radius of the blur effect (in pixels). Either a number (e.g., `5`) or a string with pixel units (e.g., `'5px'`). |
| 2 | `keepEdges` | ❌ | boolean | `true` | Whether to keep the edges of the canvas when applying the blur. |
```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.

---

### applyLUT()

Apply a LUT (Look-Up Table) filter to the current canvas context. This is a more advanced filter that can be used for color grading and complex effects. The LUT should be provided as an instance of a `Raffaello_LUT`.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`// First, create a LUT instance
const myLUT = new Raffaello_LUT({ ... });

// Then apply the LUT to the canvas
this.applyLUT(myLUT);`}
</CodeBlock>

**Parameters:**

```javascript
this.applyLUT(lut)
```

```mdx-code-block
<APITable>
```
| # | Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `lut` | ✅ | Raffaello_LUT | *`null`* | The LUT instance to apply to the canvas. |
```mdx-code-block
</APITable>
```

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.


---

### clear()

Clear the entire canvas, resetting it to a blank state.
<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.clear();`}
</CodeBlock>

**Parameters:**

*none* - This method does not take any parameters.

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.


---

### move()

Shift the entire canvas content by a specified amount in the x and y directions. 
This is useful for adjusting the position of all drawn elements, based on the calculated bounds of the actual content.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.shift(10, -20); // Shift canvas content 10px right and 20px up`}
</CodeBlock>

**Parameters:**

```javascript
this.move(x, y);
```

| # | Name | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `x` | number | `0` | Amount to shift the canvas content horizontally (positive values shift right, negative values shift left). |
| 2 | `y` | number | `0` | Amount to shift the canvas content vertically (positive values shift down, negative values shift up). |

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.


---

### rotate()

Rotate the entire canvas content by a specified angle around a given pivot point. 

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.rotate(45, 30, 30); // Rotate canvas content 45 degrees around the point (30, 30)`}
</CodeBlock>

**Parameters:**

```javascript
this.rotate(angle, x, y);
```

| # | Name | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `angle` | number | `0` | Angle to rotate in degrees. |
| 2 | `x` | number | `this.width / 2` | Coordinate X of the pivot point (in pixels). |
| 3 | `y` | number | `this.height / 2` | Coordinate Y of the pivot point (in pixels). |

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.


---

### bindToLayer()

Bind the current layer to a specific layer in the parent canvas. This can be used to create dependencies between layers, so that one layer will only be drawn after another layer has been drawn.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`this.bindToLayer(2); // Bind current layer to layer 2`}
</CodeBlock>

**Parameters:**

```javascript
this.bindToLayer(layerIdx);
```

| # | Name | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `layerIdx` | number | `0` | The index of the layer to bind to. |

**Returns:** 

`void` - This method performs a side effect (draw on the canvas). It does not return any value.


---

### getLuminance()

Get the average luminance of a specific zone on the canvas. This can be used to analyze the brightness of different areas of the canvas, which can inform dynamic adjustments to the drawing.

<CodeBlock className="small-code" language="javascript" title='Usage'>
{`// Get average luminance of a 100x100 zone starting at (10, 10)
this.getLuminance({ 
    x1: 10, 
    y1: 10, 
    x2: 110, 
    y2: 110
});
this.getLuminance({ 
    x: 10, 
    y: 10, 
    width: 100, 
    height: 100
});
this.getLuminance({ 
    bounds: { minX: 10, minY: 10, maxX: 110, maxY: 110 } 
});
`}
</CodeBlock>

**Parameters:**

```javascript
this.getLuminance(config);
```

| `config` Parameters | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `x1` or `x` | ✅ | number | `0` | X coordinate of the top-left corner of the zone (in pixels). |
| `y1` or `y` | ✅ | number | `0` | Y coordinate of the top-left corner of the zone (in pixels). |
| `x2` or `width`| ✅ | number | `this.width` | X coordinate of the bottom-right corner of the zone (in pixels). Or width of the zone (in pixels). |
| `y2` or `height` | ✅ | number | `this.height` | Y coordinate of the bottom-right corner of the zone (in pixels). Or height of the zone (in pixels). |
| `bounds` | ❌ | object | *calculated from config* | Alternative way to specify the zone using `bounds` object with `minX`, `minY`, `maxX`, `maxY` properties. In which case, the other parameters are ignored. |
| `type` | ❌ | string | `average` | Method to calculate luminance: `'average'` (default), `'minimum'` or `'maximum'`. |
| `normalize` | ❌ | boolean | `false` | Whether to normalize the luminance value to the range [0, 1]. |
| `sampleStep` | ❌ | number | `1` | Step in pixels for sampling the zone (e.g. `2` means sample every 2 pixels). Higher values can improve performance at the cost of accuracy. |

**Returns:** 

`number` - The average luminance of the specified zone, as a value between `0` (black) and `255` (white).