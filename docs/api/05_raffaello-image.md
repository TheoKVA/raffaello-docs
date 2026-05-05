# Raffaello_Image

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_Image(reference, { imageConfigs })
```

This is the class to create an image element that can be drawn on the canvas. It supports loading images from local paths, remote URLs, and base64 encoded strings. The class handles the loading process and provides properties to access the image's dimensions and status.

## Usage

<CodeBlock className="small-code" language="javascript" title='Within the global class'>
{`new class {
    constructor() {
        ...

        // highlight-start
        this.myImage  = new Raffaello_Image({ src: '/path/to/myImage.png'});
        this.webImage = new Raffaello_Image({ src: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg'});
        this.base64Image = new Raffaello_Image({ src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA' });
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        // LAYER X // DRAW IMAGE
        this.canvas.addLayer().draw(function() {
            // Simple draw
            // highlight-next-line
            this.drawImage(thisTemplate.myImage);

            // Draw with specific size
            // highlight-start
            this.drawImage(thisTemplate.webImage.img, 
                100, 100 // Position
                250, 250 // Size
            );
            // highlight-end
        });

    }
}`}
</CodeBlock>


<CodeBlock className="small-code" language="javascript" title='At the project root'>
{`// At the root
// highlight-next-line
const myImageAtRoot  = new Raffaello_Image({ url: '/path/to/myImage.png'});

new class {
    constructor() { ... }
    templateInstructions() {
        const thisTemplate = this;
        
        // LAYER X // DRAW IMAGE
        this.canvas.addLayer().draw(function() {
            // highlight-start
            this.drawImage(myImageAtRoot.img);
            // highlight-end
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
| `src` or `url` | ✅ | string | `''` | The source URL of the image to be displayed. Either a local path, a remote URL, or a base64 encoded string. |
```mdx-code-block
</APITable>
```

## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.width` | number | The width of the image. |
| `this.height` | number | The height of the image. |
| `this.img` | HTMLImageElement | The DOM image element that will hold the final image. |
| `this.isLoaded` | boolean | A flag indicating whether the image has finished loading. |
| `this.isSafeForExport` | boolean | A flag indicating whether the image is safe for export. |
```mdx-code-block
</APITable>
```

---