
## Table of Contents
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start)

## Quick API Example

### [quick start](../../sample/api/quickStart)  <span style="font-size: 14px">[[show]](../images/common-api-sample-0.gif)</span>

- [quickStart.js](../../../../doc/apiSamples)

```js
const {
    compile
} = require('docway');

compile({
    template: ({
        title
    }) => `## ${title}`,

    content: {
        title: 'test'
    }
}).then((doc) => {
    console.log(doc);
});

```

- run sample

```
$ node quickStart.js 
## test

```


