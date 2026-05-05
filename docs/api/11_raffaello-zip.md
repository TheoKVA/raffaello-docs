# Raffaello_Zip

import CodeBlock from '@theme/CodeBlock';
import APITable from '@site/src/components/APITable';

```javascript
new Raffaello_Zip()
```

## Usage

<CodeBlock className="small-code" language="javascript" title=''>
{`
    // Declarer a new zip instance
    const myZip = new Raffaello_Zip();

    // Add files
    await myZip.addFile('path/in/zip', blob);
    await myZip.addFile('path/in/zip', blob);
    
    // Download the zip
    await myZip.download('myProject.zip');
`}
</CodeBlock>


## Initiated Properties

```mdx-code-block
<APITable>
```
| Property | Type | Description | 
| :--- | :--- | :--- |
| `this.files` | array | An array that store the files added to the zip. Each file is represented as a `path` string. |
```mdx-code-block
</APITable>
```


## Public Methods


### addFile()

Method to add a file to the zip.

```javascript title="Usage"
await myZip.addFile('path/in/zip', blob);
```

**Parameters:**

| Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `path` | ✅ | string | *`null`* | The path where the file will be stored in the zip. |
| `blob` | ✅ | Blob | *`null`* | The file content as a Blob. |

**Returns:** 

`void` — This method performs a side effect (add the file to the zip). It does not return any value.

---

### download()

Method to trigger the download of the zip file.

```javascript title="Usage"
await myZip.download('myProject.zip');
```

**Parameters:**

| Name | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `filename` | ✅ | string | *`null`* | The name of the zip file to be downloaded. |

**Returns:** 

`void` — This method performs a side effect (trigger the download of the zip file). It does not return any value.

---