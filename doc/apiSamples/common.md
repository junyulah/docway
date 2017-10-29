## Quick API Example

- quick start [[see]](./test/sample/api/quickStart) 

[quickStart.js](test/sample/api/quickStart/quickStart.js)
```js
const {
    compile
} = require('docway');

compile({
    template: ({
        title
    }) => `${title}`,

    content: {
        title: 'test'
    }
});

```

```
$ node quickStart.js 

```
