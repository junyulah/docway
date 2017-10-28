# docway

## Install

```
npm i docway --save
```

Install on global
```
npm i docway -g
```

## CLI options

```
[root@localhost ~]# docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```

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


see more CLI samples: [common samples](./doc/cliSamples/common.md)

## License

docway is [MIT licensed](./LICENSE)
