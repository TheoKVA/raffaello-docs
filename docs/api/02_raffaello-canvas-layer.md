# Raffaello_CanvasLayer

import CodeBlock from '@theme/CodeBlock';

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

Calling a new **`Raffaello_CanvasLayer`** is like creating a new `canvas` on which you will pass all the drawing instructions using the method `draw()`.

## Initiated Properties

| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.canvas` | ... | ... |
| `this.context` | ... | ... |


## Public Methods


### draw()

Introduction.

```javascript
this.canvas.addLayer().draw(function() {
    // Layer drawing instructions
});
```

Description

**Parameters:**

```javascript
.addLayer(function)
```

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| *unamed*  | `function` | *`{}`* | The drawing instructions for the layer |

**Returns:** 

`void` — This method performs a side effect (add the drawing instructions to the layer). It does not return any value.

---

### drawText()

Introduction

<CodeBlock className="small-code" language="javascript" title='Extended version'>
{`this.drawText({
    text: thisTemplate.container.querySelector('.js-textInput').value,
    fontFamily: 'RTSNeue-Medium',
    fontSize: 30,
    fontLineHeight: 34,
    fontKerningOptical: true, // (Optional) Default to false
    fontLetterSpacing: 0,  // (Optional) Default to 0 // (in prct)
    fontFillColor: 'white',
    textAlign: { // Optional
        horizontal: 'left', // Default to 'left' // 'left' | 'center' | 'right'
        vertical: 'bottom', // Default to 'bottom' // 'top' | 'center' | 'bottom'
    },
    textBaseline: 'hanging', // (Optional) Default to 'alphabetic'
    anchorPoint: 'true', // (Optional) Default to 'none' // 'none' | 'true' | 'L'
    position: {
        x: 40,
        y: 1090,
        maxWidth: 0, // (Optional) Default to '0' // '0' means no limit
        maxWidthRescale: false, // (Optional) Default to false // false (means line break) | true (means rescale)
        maxLines: 0, // (Optional) Default to '0' // '0' means no limit
        ignoreEmptyLines: true, // (Optional) Default to true
        ignoreDoubleSpaces: true, // (Optional) Default to true
    },
    bounds: [ true, false ], // (Optional) Default to [ true, true ] // [ include ascent?, include descent? ]
    highlight: { // (Optional) Change style of text between '§'
        fontFamily: 'RTSNeueACTU-ExtraLight',
        fontSize: 30,
        fontLetterSpacing: 0,
        fontFillColor: 'white',
    },
    background: 'red', // (Optional)
    background: { // (Optional)
        color: 'red', // (Optional) Default to 'red'
        stroke: { // (Optional) 
            style: "middle", // Default to 'middle' // 'middle' | 'inside' | 'outside'
            color: 'red', // Default to 'red'
            width: 0,
        },
        cornerRadius: 0, // (Optional) Default to 0
        margins: { // (Optional)
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

Description

**Parameters:**

```javascript
.addLayer(function)
```

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| *unamed*  | `function` | *`{}`* | The drawing instructions for the layer |

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
    x: 0,            // default 0
    y: 0,            // default 0
    width: 100,      // default canvas.width
    height: 100,     // default canvas.height
    color: "black", // (Optional) default 'black'
    cornerRadius: 0, // (Optional) default 0 // 5 || [5] | [5, 5] | [5, 10, 5, 10]
    stroke: {
        style: "middle", // (Optional) default 'middle' // 'inside' | 'outside' | 'middle'
        width: 0,  // (Optional) default 0
        color: "black", // (Optional) default 'black'
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
    direction: 'UP', // 'UP', 'RIGHT', 'DOWN', 'LEFT'
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