# Raffaello_Export

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_Export({
    targetDiv: document.querySelector('#js-id'),
    saveButton: document.querySelector('.js-save'),
    loadButton: document.querySelector('.js-load'),
    projectName: 'project', // default 'project_YYMMDD.zip' - (optionnal)
});
```

This is the class to manage the export and import the current state of the HTML inputs and images in cropper. It allows you to save the current state of the inputs in a ZIP file and load it back later. The class handles the click events on the specified buttons and manages the export and import processes.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`// in the HTML
<div id="my-id">
    <div class="raffaello-imageInput" style="height:400px"></div>
    <input class="js-input" type="text" placeholder="Enter something...">
    <input class="js-input" type="text" placeholder="Enter something...">
</div>
<button class="js-save">Save</button>
<button class="js-load">Load</button>   

// in the JS
// highlight-start
new Raffaello_Export({
    targetDiv: document.querySelector('#my-id'),
    saveButton: document.querySelector('.js-save'), 
    loadButton: document.querySelector('.js-load'),
    projectName: 'myProject', // default 'project_YYMMDD.zip' - (optionnal)
});
// highlight-end
`}
</CodeBlock>


## Constructor Options

```mdx-code-block
<APITable>
```
| Name | Required | Type | Default | Description | 
| :--- | :--- | :--- | :--- | :--- |
| `targetDiv` | ✅ | HTMLElement | `null` | The container element that contains the inputs and images to be exported. |
| `saveButton` | ✅ | HTMLElement | `null` | The button element that triggers the export process when clicked. |
| `loadButton` | ✅ | HTMLElement | `null` | The button element that triggers the import process when clicked. |
| `projectName` | ❌ | string | `project_YYMMDD.zip` | The default name for the exported ZIP file. If not provided, it will default to 'project_YYMMDD.zip' where YYMMDD is the current date. |
```mdx-code-block
</APITable>
```

## Initiated Properties

This class does not have any specific properties that are initiated upon instantiation. It primarily relies on the provided options and manages the export and import processes internally.