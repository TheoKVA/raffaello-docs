# Raffaello_BatchImageCropper

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_BatchImageCropper(reference, { imageConfigs })
```

This is the class to create multiple image inputs, based on Cropper.

## Usage

<CodeBlock className="small-code" language="javascript">
{`new class {
    constructor() {
        ...

        // highlight-start
        const imageConfigs = [
            { selector: '.js-imageInputTeam1', width: 735, height: 1080, layerIndex: 0},
            { selector: '.js-imageInputTeam2', width: 735, height: 1080, layerIndex: 1},
            { selector: '.js-imageInputLogo1', width: 352, height: 352, layerIndex: 3, viewMode:0, zoomOnWheel: 1},
            { selector: '.js-imageInputLogo2', width: 352, height: 352, layerIndex: 3, viewMode:0, zoomOnWheel: 1, isOptional: true}
        ];
        this.batchImageCropper = new Raffaello_BatchImageCropper(this, imageConfigs);
        this.inputImage = this.batchImageCropper.inputImages;
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        // LAYER 0 // IMAGE INPUT
        this.canvas.addLayer().draw(function() {
            // highlight-next-line
            this.drawImageInput(thisTemplate.inputImage[0], 0, 0);
            this.applyFilter(thisTemplate.inputImage[0].config.filter);   
        });
        
    }
}`}
</CodeBlock>

## Constructor Options

```mdx-code-block
<APITable>
```
| Name | Required | Type | Default | Description | 
| :--- | :--- | :--- | :--- | :--- |
| `reference` | ✅ | object | `null` | The reference to the parent class that will use the batch image cropper. This is necessary to access the canvas and other properties of the parent class. |
| `imageConfigs` | ✅ | array of objects | `[]` | An array of configuration objects for each image input. These should follow the structure needed for each image cropper. |
```mdx-code-block
</APITable>
```

## Initiated Properties

The resulting is an array of image input instances created based on the `imageConfigs` provided in the constructor. Each instance contains properties such as `img` (the cropped image as a Blob), `config` (the configuration object for that image), and `cropper` (the Cropper instance for that image).