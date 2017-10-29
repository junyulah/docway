
## Table of Contents
- [Quick CLI Example](#quick-cli-example)
  * [check cli options](#check-cli-options)
  * [quick start](#quick-start)

## Quick CLI Example

### [check cli options](https://github.com/LoveKino/docway/tree/master/sample/cli/options) 



- run sample

```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```



### [quick start](https://github.com/LoveKino/docway/tree/master/sample/cli/quickStart) [[download]](https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz)

- [doc.js](https:/github.com/LoveKino/docway/tree/master/sample/cli/quickStart/doc.js)

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

- view the effect: [README.md](https:/github.com/LoveKino/docway/tree/master/sample/cli/quickStart/README.md)

