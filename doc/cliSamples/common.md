
## Table of Contents
- [Quick CLI Example](#quick-cli-example)
  * [check cli options](#check-cli-options)
  * [quick start](#quick-start)

## Quick CLI Example

### [check cli options](../../sample/cli/options)  <a href="../images/common-cli-sample-0.gif"><img src="https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/play.png" style="height:30px" alt=animation></a>



- run sample

```
$ ./node_modules/.bin/docway -h 
Usage: docway
    --config [config js file]


Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]


```



### [quick start](../../sample/cli/quickStart) <a href="https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz"><img src="https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/download.png" style="height:30px" alt=download></a> <a href="../images/common-cli-sample-1.gif"><img src="https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/play.png" style="height:30px" alt=animation></a>

- [doc.js](../../../../doc/cliSamples)

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

- view the effect: [README.md](../../../../doc/cliSamples)

