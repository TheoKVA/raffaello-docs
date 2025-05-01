# Raffaello_ImageCropper

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_ImageCropper({ options })
```

This is the class to create an image input, based on Cropper.

## Usage

<CodeBlock className="small-code" language="javascript" title='Condensed version'>
{`new class {
    constructor() {
        ...

        // highlight-start
        this.inputImage = new Raffaello_ImageCropper({
            layerRef: this,
            layerIndex: 0,
        });
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        // LAYER 0 // IMAGE INPUT
        this.canvas.addLayer().draw(function() {
            // highlight-next-line
            this.drawImageInput(thisTemplate.inputImage, 0, 0);
            this.applyFilter(thisTemplate.inputImage.config.filter);   
        });

    }
}`}
</CodeBlock>

<CodeBlock className="small-code" language="javascript" title='Extended version'>
{`this.inputImage = new Raffaello_ImageCropper({
    layerRef: this,
    layerIndex: 0,
    width: 1920, // Optional - default this.canvas.width
    height: 1080, // Optional - default this.canvas.height
    onImageReady: () => { // Optional - When an image changes
    },
    onCrop: () => { // Optional - When the crop is happening
    },
    onCropStart: () => { // Optional - When the crop starts
    },
    onCropEnd: () => { // Optional - When the crop ends
    },
    onFilterChange: () => { // Optional - When the filter are being changed
    },
    viewMode: 0, // Optional - default 0
    zoomOnWheel: 1, // Optional - default 1
    onZoom: () => { // Optional - When a zoom happened, if available
    },
});`}
</CodeBlock>

