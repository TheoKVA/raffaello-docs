# Raffaello_FullScreen

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_FullScreen({ previewContainer: 'js-previewImage' });
```

This is the class to manage the full-screen mode of images. This enables the user to click on an image and have it displayed in full-screen mode, providing a better view of the details. The class handles the click event on the specified container and toggles the full-screen mode for the image.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`// in the HTML
<img class="js-previewImage" style="width: 100%;" src="https://dummyimage.com/1920x1080/000.jpg">

// in the JS
// highlight-next-line
new Raffaello_FullScreen({ previewContainer: 'js-previewImage' });
`}
</CodeBlock>

With that in place, when the user clicks on the image, it will be displayed in full-screen mode. Clicking again or pressing the `Esc` key will exit the full-screen mode and return to the normal view.

## Constructor Options

```mdx-code-block
<APITable>
```
| Name | Required | Type | Default | Description | 
| :--- | :--- | :--- | :--- | :--- |
| `previewContainer` | ✅ | string | `''` | A CSS selector string to target the image elements that should trigger the full-screen mode when clicked. |
```mdx-code-block
</APITable>
```

## Initiated Properties

This class does not have any specific properties that are initiated upon instantiation. It primarily relies on the provided options and manages the full-screen functionality internally.