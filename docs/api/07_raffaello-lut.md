# Raffaello_LUT

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_LUT({ url: '/path/to/myLut.CUBE'});
```

This is the class to load and manage LUT (Look-Up Table) files that can be used for applying color grading effects on the canvas. The class handles the loading process and provides properties to check the LUT's status.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`
// highlight-next-line
const myLut = new Raffaello_LUT({ url: '/path/to/myLut.CUBE'})
        
new class {
    constructor() { ... }
    templateInstructions() {
        // LAYER X // DRAW TEXT
        this.canvas.addLayer().draw(function() {
            ...
            // highlight-next-line
            this.applyLUT(myLut);
            ...
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
| `url` | ✅ | string | `''` | The source URL of the LUT file to be loaded. |
```mdx-code-block
</APITable>
```

## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.lutData` | object | The loaded LUT data. Initially `null` until the LUT is loaded. |
| `this.isLoaded` | boolean | Returns `true` if the LUT has been successfully loaded and is ready to use. |
```mdx-code-block
</APITable>
```