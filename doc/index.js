'use strict';

let packageCollector = require('../collectors/node/package');
let cmdCollector = require('../collectors/cmd');
let path = require('path');
let sampleCollector = require('../collectors/sample');

module.exports = {
    template: require('./docTemplate.js'),

    target: path.join(__dirname, '../README.md'),

    content: {
        licensePath: './LICENSE',
        moreCLISamples: [{
            name: 'common samples',
            link: './doc/cliSamples/common.md'
        }]
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        args: [path.join(__dirname, '../package.json')]
    }, {
        name: 'cliOptions',
        collector: cmdCollector,
        args: ['docway -h', {
            cwd: path.join(__dirname, '../bin')
        }]
    }, {
        name: 'cliSamples',
        collector: sampleCollector,
        args: [require('../test/sample/basic.js')]
    }],

    processors: [],

    subDocuments: [{
        target: path.join(__dirname, './cliSamples/common.md'),
        template: require('./cliSampleTemplate'),
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            args: [require('../test/sample/basic.js')]
        }]
    }]
};
