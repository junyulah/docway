
## Table of Contents
- [Quick CLI Example](#quick-cli-example)
  * [check cli options](#check-cli-options)
  * [quick start](#quick-start)

## Quick CLI Example

### [check cli options](../../../sample/cli/options)  [[show]](images/samples-sample-0.gif)



- run sample

```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```



### [quick start](../../../sample/cli/quickStart) [[download]](https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz) [[show]](images/samples-sample-1.gif)

- [doc.js](../../../../doc/subdocs/0)

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
        data: path.join(__dirname, './package.json')
    }],

    subDocuments: []
};

```

- run sample

```
$ ./node_modules/.bin/docway --config ./doc.js 
[success] finished to build documents.


```

- view the effect: [README.md](../../../../doc/subdocs/0)

