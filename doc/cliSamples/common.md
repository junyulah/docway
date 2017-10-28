## Quick CLI example

- [options](./test/sample/cli/options)



```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```

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
$ ./node_modules/.bin/docway --config ./doc.js 
## test

```
