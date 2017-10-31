
## Table of Contents
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start)

## Quick API Example

### [quick start](../../sample/api/quickStart)  <a href="../images/common-api-sample-0.gif"><img src="https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/play.png" style="height:30px" alt=animation></a>

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


