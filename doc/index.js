'use strict';

let packageCollector = require('../collectors/node/package');
let cmdCollector = require('../collectors/cmd');
let path = require('path');
let cliSampleCollector = require('../collectors/node/cliSample');

module.exports = {
    template: require('./docTemplate.js'),

    content: {
        licensePath: './LICENSE'
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
        collector: cliSampleCollector,
        args: [path.join(__dirname, '../test/sample/basic.js')]
    }],

    processors: []
};
