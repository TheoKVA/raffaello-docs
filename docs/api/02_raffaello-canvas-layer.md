# Raffaello_CanvasLayer

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

Main element to draw on a **`Raffaello_Canvas`**. They should only be called via `Raffaello_Canvas.addLayer()` methods. This will ensure each layers are added accordingly to the `Raffaello_Canvas.layers` array.

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

| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.canvas` | ... | ... |
| `this.context` | ... | ... |


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
    bounds: [ true, false ],      // (Optional) Default [ true, true ] // [ include ascent?, include descent? ]
    highlight: {                  // (Optional) Change style of text between '§'
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

| Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `text` | ✅ | HTMLElement / text | *`null`* | ... |
| `fontFamily` | ✅ | string | *`null`* | ... |
| `fontSize` | ✅ | number | *`null`* | ... |
| `fontLineHeight` | ❌ | number | `fontSize` value | ... |
| `fontKerningOptical` | ❌ | boolean | `false` | ... |
| `fontLetterSpacing` | ❌ | number | `0` | (in prct) |
| `fontFillColor` | ❌ | CSS color | `white` | ... |
| `textAlign.horizontal` | ❌ | string | `left` | 'left' \| 'center' \| 'right' |
| `textAlign.vertical` | ❌ | string | `bottom` | 'top' \| 'center' \| 'bottom' |
| `textBaseline` | ❌ | string | `alphabetic` | ... |
| `anchorPoint` | ❌ | string | `true` | 'none' \| 'true' \| 'L' |
| `position.x` | ✅ | number | *`null`* | ... |
| `position.y` | ✅ | number | *`null`* | ... |
| `position.maxWidth` | ❌ | number | `0` | In pixels, '0' means no limit |
| `position.maxWidthRescale` | ❌ | boolean | `false` | `false` means line break \| `true` means rescale |
| `position.maxLines` | ❌ | number | `0` | '0' means no limit |
| `position.ignoreEmptyLines` | ❌ | boolean | `true` | ... |
| `position.ignoreDoubleSpaces` | ❌ | boolean | `true` | ... |
| `bounds` | ❌ | array | `[ true, true ]` | \[ include ascent?, include descent? \] |

```mdx-code-block
</APITable>
```

```
highlight: {                  // (Optional) Change style of text between '§'
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
```

**Returns:** 

`void` — This method performs a side effect (draw text on the canvas). It does not return any value.

---

### drawImage()

```javascript

```

### drawImageInput()

```javascript
    this.drawImageInput(thisTemplate.inputImage);
    this.drawImageInput(thisTemplate.inputImage, 0, 0);
```

### drawRect()

```javascript
this.drawRect({
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
});
```

### drawStar()

```javascript
this.drawStar({
    x_center: 0,
    y_center: 0,
    spikes: 5,
    color: "red",
    outerRadius: 100,
    innerRadius: 150,
})
```

### drawGradient()

```javascript
this.drawGradient({
    x: 10,
    y: 10,
    width: 90,
    height: 80,
    direction: 'UP', // 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'
    gradient: [
        [0.0, `rgba(0,0,0, 0)`], // Start
        [1.0, `rgba(0,0,0, 0.8)`], // End
    ]
});
```

### prepareFilter()

```javascript

```

### applyFilter()

```javascript
this.applyFilter(`drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))`);
```

### applyLUT()

```javascript

```
