# HTML inputs

import CodeBlock from '@theme/CodeBlock';

Coming soon.

---

## Select

```html
<select class="js-select">
    <option value="VALUE_A" selected>Value A</option>
    <option value="VALUE_B">Value B</option>
</select>
```

<CodeBlock className="small-code" language="javascript">
{`new class {
    constructor() {
        ...

        // highlight-start
        this.container.querySelector('.js-select').addEventListener('input', () => this.canvas.updateLayers([1]));
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        this.canvas.addLayer().draw(function() {
            // highlight-next-line
            const IS_UP = thisTemplate.container.querySelector('.js-select').value == 'UP';

            ...
        });
        
    }
}`}
</CodeBlock>


---

## Slider


```html
<p class="small-p" >Lorem Ipsum</p>
<input class="js-select" type="range" min="0" max="100" value="50">
```

<CodeBlock className="small-code" language="javascript">
{`new class {
    constructor() {
        ...

        // highlight-start
        this.container.querySelector('.js-slider').addEventListener('input', () => this.canvas.updateLayers([1]));
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        this.canvas.addLayer().draw(function() {
            // highlight-next-line
            const SLIDER_VALUE = thisTemplate.container.querySelector('.js-slider').value;

            ...
        });
        
    }
}`}
</CodeBlock>


---

## Checkbox


```html
<div class="flex-column full-width" style="gap:6px">
    <label class="switch">
        <input type="checkbox" class="js-checkbox">
        <span class="slider round"></span>
    </label>
    <p class="small-p" style="margin-top: 2px;" >Lorem Ipsum</p>
</div>
```

<CodeBlock className="small-code" language="javascript">
{`new class {
    constructor() {
        ...

        // highlight-start
        this.container.querySelector('.js-checkbox').addEventListener('input', () => this.canvas.updateLayers([1]));
        // highlight-end

        ...
    }
    templateInstructions() {
        const thisTemplate = this;
        
        this.canvas.addLayer().draw(function() {
            // highlight-next-line
            const IS_CHECKED = thisTemplate.container.querySelector('.js-checkbox').checked;

            ...
        });
        
    }
}`}
</CodeBlock>


---


## Radio

