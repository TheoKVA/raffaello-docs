# Raffaello_CanvasLayer

Coming soon.

## Methods

### draw()
```javascript
this.canvas.addLayer().draw(function() {
    // drawing instructions
});
```

### drawText()

```javascript
this.drawText({
    text: thisTemplate.container.querySelector('.js-textInput').value,
    fontFamily: 'RTSNeue-Medium',
    fontSize: 30,
    fontLineHeight: 34,
    fontKerningOptical: true, // default false - (Optional)
    fontLetterSpacing: 0,  // default 0 - (in prct) - (Optional)
    fontFillColor: 'white',
    textAlign: { // (Optional)
        horizontal: 'left', // default left - left / center / right
        vertical: 'bottom', // default bottom - top / center / bottom
    },
    textBaseline: 'hanging', // default 'alphabetic' (Optional)
    anchorPoint: 'true', // default none - none / true / L - (Optional)
    position: {
        x: 40,
        y: 1090,
        maxWidth: 0, // default 0 - 0 > no limit - (Optional)
        maxWidthRescale: false, // default false - false: line break | true: rescale - (Optional)
        maxLines: 0, // default 0 - 0 > no limit - (Optional)
        ignoreEmptyLines: true, // default true - (Optional)
        ignoreDoubleSpaces: true, // default true - (Optional)
    },
    bounds: [ true, false ], // default  [ true, true ] - include_ascent?, include_descent? - (Optional)
    highlight: { // Change le style entre de '§' - (Optional)
        fontFamily: 'RTSNeueACTU-ExtraLight',
        fontSize: 30,
        fontLetterSpacing: 0,
        fontFillColor: 'white',
    },
    background: 'red', // - (Optional)
    background: { // - (Optional)
        color: 'red', // (Optional) default to 'red'
        stroke: {
            style: "middle", // (Optional) default 'middle' // 'middle' | 'inside' | 'outside'
            color: 'red', // (Optional) default to 'red'
            width: 0, // (Optional) default to 0
        },
        cornerRadius: 0, // (Optional) default to 0
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
);
```

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