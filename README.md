# docway

## Install

```
npm i docway --save
```

Install on global
```
npm i docway -g
```

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


see more CLI samples: [common CLI samples](./doc/cliSamples/common.md)

## Quick API example

- [quick start](./test/sample/api/quickStart)

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


see more API samples: [common API samples](./doc/apiSamples/common.md)

## License

docway is [MIT licensed](./LICENSE)
