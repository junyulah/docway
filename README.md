
# docway
> Generate documents for a project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick CLI Example](#quick-cli-example)
- [Quick API Example](#quick-api-example)
- [License](#license)

## Features
- Plugin based. Which means we hope you just need to require suitable plugins.
- Tools and libraries exposed. Which means you can customize your own templates or collectors easily.
- Sample standard. We try to make a simple sample standard which we can make sample easily to read, run and download ...


## Installation

```
npm i docway --save
```

Install on global
```
npm i docway -g
```

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


see more CLI samples: [common CLI samples](./doc/cliSamples/common.md)

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


see more API samples: [common API samples](./doc/apiSamples/common.md)

## License

docway is [MIT licensed](./LICENSE)
