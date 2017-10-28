## Quick CLI example

- [quick start](./test/sample/cli/quickStart)

[doc.js](test/sample/cli/quickStart/doc.js)
```js
module.exports = {
    template: ({title}) => `## ${title}`,
    content: {
        title: 'test'
    }
};

```

```
[root@localhost ~]# ./node_modules/.bin/docway --config ./doc.js 
## test

```
