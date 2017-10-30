
# docway
> Generate documents for a project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick CLI Example](#quick-cli-example)
  * [check cli options](#check-cli-options)
  * [quick start](#quick-start)
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start-1)
- [License](#license)

## Features
- Plugin based. Which means we hope you just need to require suitable plugins.
- Tools and libraries exposed. Which means you can customize your own templates or collectors easily.
- [Sample standard](./doc/sampleStandard.md). We try to make a simple sample standard which we can make sample easily to read, download, run...


## Installation

```
npm i docway --save
```

Install on global
```
npm i docway -g
```

## Quick CLI Example

### [check cli options](sample/cli/options)  [[animation]](doc/images/quick-cli-sample-0.gif)



- run sample

```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```



### [quick start](sample/cli/quickStart) [[download]](https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz) [[animation]](doc/images/quick-cli-sample-1.gif)

- [doc.js](sample/cli/quickStart/doc.js)

```js
const packageCollector = require('docway/collectors/node/package');
const simpleDocTemplate = require('docway/templates/simple/docTemplate.js');
const path = require('path');

module.exports = {
    template: simpleDocTemplate,

    target: path.join(__dirname, './README.md'),

    content: {
        topic: 'Quick start test project.',
        features: [
            'This is feature 1',
            'This is feature 2'
        ],

        licensePath: './LICENSE'
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        args: [path.join(__dirname, './package.json')]
    }],

    subDocuments: []
};

```

- run sample

```
$ ./node_modules/.bin/docway --config ./doc.js 


```

- view the effect: [README.md](sample/cli/quickStart/README.md)



see more CLI samples: [common CLI samples](./doc/cliSamples/common.md)

## Quick API Example

### [quick start](sample/api/quickStart)  [[animation]](doc/images/quick-api-sample-0.gif)

- [quickStart.js](sample/api/quickStart/quickStart.js)

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




see more API samples: [common API samples](./doc/apiSamples/common.md)

## License

docway is [MIT licensed](./LICENSE)

___
Document was generated by [docway](https://github.com/LoveKino/docway).
