## Quick CLI Example

- options [[see]](./test/sample/cli/options) 



```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```

- quick start [[see]](./test/sample/cli/quickStart) [[download]](./test/sample/cli/quickStart.tar.gz)

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
