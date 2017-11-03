
## Table of Contents
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start)

## Quick API Example

### [quick start](../../../sample/api/quickStart)  [[show]](images/samples-sample-0.gif)

- [quickStart.js](../../../../doc/subdocs/1)

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
[success] finished to build documents.
## test

```


