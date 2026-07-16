# Raffaello_Font

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_Font({ name: 'myFont', url: '/path/to/myFont.woff2'});
```

This is the class to load and manage custom fonts that can be used for drawing text on the canvas. The class handles the loading process and provides properties to check the font's status.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`
// highlight-next-line
const myFont = new Raffaello_Font({ name: 'myFont', url: '/path/to/myFont.woff2'});
        
new class {
    constructor() { ... }
    templateInstructions() {
        // LAYER X // DRAW TEXT
        this.canvas.addLayer().draw(function() {
            this.drawText({
                ...
                // highlight-next-line
                fontFamily: 'myFont',
                ...
            });
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
| `name` | ✅ | string | `''` | The name of the font to be used in the `fontFamily` property when drawing text. |
| `url` | ✅ | string | `''` | The source URL of the font file to be loaded. Either a local path or a remote URL. Supported formats depend on the browser (e.g., `.woff`, `.woff2`, `.ttf`). |
```mdx-code-block
</APITable>
```

## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.font` | FontFace | The loaded FontFace object. Initially `null` until the font is loaded. |
| `this.isLoaded` | boolean | Returns `true` if the font has been successfully loaded and is ready to use. |
```mdx-code-block
</APITable>
```