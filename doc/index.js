'use strict';

let packageCollector = require('../collectors/node/package');
let path = require('path');
let sampleCollector = require('../collectors/sample');

module.exports = {
    template: require('./docTemplate.js'),

    target: path.join(__dirname, '../README.md'),

    content: {
        licensePath: './LICENSE',
        moreCLISamples: [{
            name: 'common CLI samples',
            link: './doc/cliSamples/common.md'
        }],

        moreApiSamples: [{
            name: 'common API samples',
            link: './doc/apiSamples/common.md'
        }]
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        args: [path.join(__dirname, '../package.json')]
    }, {
        name: 'cliSamples',
        collector: sampleCollector,
        args: [require('../test/sample/quickCLIStart.js')]
    }, {
        name: 'apiSamples',
        collector: sampleCollector,
        args: [require('../test/sample/quickAPIStart.js')]
    }],

    processors: [],

    subDocuments: [{
        target: path.join(__dirname, './cliSamples/common.md'),
        template: require('./sampleTemplate'),
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            args: [require('../test/sample/quickCLIStart.js')]
        }]
    }, {
        target: path.join(__dirname, './apiSamples/common.md'),
        template: require('./sampleTemplate'),
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            args: [require('../test/sample/quickAPIStart.js')]
        }]
    }]
};
