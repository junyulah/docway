
## Table of Contents
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start)

## Quick API Example

### [quick start](https://github.com/LoveKino/docway/tree/master/sample/api/quickStart) 

- [quickStart.js](https:/github.com/LoveKino/docway/tree/master/sample/api/quickStart/quickStart.js)

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


