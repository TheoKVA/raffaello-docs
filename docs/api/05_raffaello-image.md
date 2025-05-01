# Raffaello_Image

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_Image(reference, { imageConfigs })
```

This is the class to .

## Usage

<CodeBlock className="small-code" language="javascript" title='Within the global class'>
{`new class {
    constructor() {
        ...

        // highlight-start
        this.myImage  = new Raffaello_Image({ url: '/path/to/myImage.png'});
        this.webImage = new Raffaello_Image({ url: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg'});
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        // LAYER X // DRAW IMAGE
        this.canvas.addLayer().draw(function() {
            // Simple draw
            // highlight-next-line
            this.drawImage(thisTemplate.myImage.img, 0, 0);

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
            this.drawImage(myImageAtRoot.img, 0, 0);
            // highlight-end
        });
        
    }
}`}
</CodeBlock>