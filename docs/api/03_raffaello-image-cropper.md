# Raffaello_ImageCropper

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_ImageCropper({ options })
```

This is the class to create an image input. It can be used to create a layer where the user can upload an image, crop it and apply filters. It is based on the Cropper library, but with a lot of customizations and optimizations for RAFFAELLO.

It is designed to be initialized within the **`constructor()`** of the **global class** and then drawn within a layer's **`draw()`** method, using **`this.drawImage()`**.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
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
            this.drawImage(thisTemplate.inputImage);
            this.applyFilter(thisTemplate.inputImage.filter);   
        });

    }
}`}
</CodeBlock>



<CodeBlock className="small-code" language="javascript" title='Condensed version'>
{`
this.inputImage = new Raffaello_ImageCropper({
    layerRef: this,
    layerIndex: 0,
});
`}
</CodeBlock>

<CodeBlock className="small-code" language="javascript" title='Extended version'>
{`this.inputImage = new Raffaello_ImageCropper({
    layerRef: this,
    layerIndex: 0,
    width: 1000,       // (Optional) Default this.canvas.width
    height: 1000,      // (Optional) Default this.canvas.height
    watermark: '...'   // (Optional) Watermark url or base 64
    viewMode: 0,       // (Optional) Default 0
    zoomOnWheel: 1,    // (Optional) Default 1
    acceptVideo: true, // (Optional) Default false

    // (Optional) Event listener functions
    onImageReady: () => {},   // When an image is ready
    onCrop: () => {},         // While the crop is happening
    onCropStart: () => {},    // When the crop starts
    onCropEnd: () => {},      // When the crop ends
    onFilterChange: () => {}, // When the filters are changed
    onZoom: () => {},         // At zoom
});`}
</CodeBlock>


## Constructor Options

```mdx-code-block
<APITable>
```
| Name | Required | Type | Default | Description | 
| :--- | :--- | :--- | :--- | :--- |
| `layerRef` | ✅ | Raffaello_Canvas | *`null`* | The parent canvas reference. This is required to properly initialize the cropper HTML DOM and link it to the canvas. |
| `layerIndex` | ❌ | number | *`null`* | The index of the layer where the image cropper will be drawn. If this is not defined, use the `makeDrawing()` method to start the drawing sequence. |
| `width` | ✅ | number | *`this.canvas.width`* | The width of the cropper canvas. By default, it takes the width of the main canvas. |
| `height` | ✅ | number | *`this.canvas.height`* | The height of the cropper canvas. By default, it takes the height of the main canvas. |
| `watermark` | ❌ | string (URL or base64) | *`null`* | An optional watermark image that will be displayed on top of the cropper. It can be a URL or a base64 string. |
| `viewMode` | ❌ | number | `0` | ... |
| `zoomOnWheel` | ❌ | boolean | `1` | Whether to enable zooming the cropper with the mouse wheel. |
| `acceptVideo` | ❌ | boolean | `false` | Whether to accept video files as input. If set to `true`, users will be able to upload videos, and the cropper will extract the first frame as the image to be cropped. |
```mdx-code-block
</APITable>
```


## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.width` | number | The canvas width (in pixels) |
| `this.height` | number | The canvas height (in pixels) |
| `this.isLoaded` | boolean | Returns `true` if the cropper has finished loading the image. |
| `this.isReady` | boolean | Returns `true` if the cropper is ready to be drawn. |
| `this.filter` | string | The current filter string to apply to the cropped image. This is updated in real-time as the user changes the filters inputs. |

```mdx-code-block
</APITable>
```

---

## Public Methods