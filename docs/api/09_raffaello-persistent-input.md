# Raffaello_PersistentInputs

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_PersistentInputs({ inputs: 'js-raffaelloPersistentInput-10mn', timeout: 600000 });
```

This is the class to manage persistent input values. It allows you to save and retrieve input values in the browser's local storage, ensuring that user inputs are preserved across sessions. The class takes care of saving the input values at regular intervals and retrieving them when needed.

## Usage

<CodeBlock className="small-code" language="javascript" title='Usage exemple'>
{`// in the HTML
<input class="js-raffaelloPersistentInput-10mn" type="text" placeholder="Enter something...">

// in the JS
// highlight-next-line
new Raffaello_PersistentInputs({ inputs: 'js-raffaelloPersistentInput-10mn', timeout: 600000 });
`}
</CodeBlock>

## Constructor Options

```mdx-code-block
<APITable>
```
| Name | Required | Type | Default | Description | 
| :--- | :--- | :--- | :--- | :--- |
| `inputs` | ✅ | string | `''` | A CSS selector string to target the input elements that should be managed by this class. |
| `timeout` | ❌ | number | `600000` | Time in milliseconds for how often the input values should be saved to local storage. Default is 10 minutes (600000 ms). |
| `triggerEvent` | ❌ | boolean | `false` | Whether to trigger the default event when the values are saved. (`change` for `<select>` elements and `input` for `<input>` and `<textarea>` inputs) |
```mdx-code-block
</APITable>
```

## Initiated Properties

This class does not have any specific properties that are initiated upon instantiation. It primarily relies on the provided options and manages the input values internally.