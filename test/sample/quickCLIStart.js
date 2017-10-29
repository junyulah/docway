'use strict';

const path = require('path');

module.exports = {
    name: 'Quick CLI Example',
    samples: [{
        name: 'check cli options',
        directory: path.join(__dirname, './cli/options'),
        link: './test/sample/cli/options',
        prepareCmd: 'npm i',
        runCmd: './node_modules/.bin/docway -h'
    }, {
        name: 'quick start',
        directory: path.join(__dirname, './cli/quickStart'),
        link: './test/sample/cli/quickStart',
        downloadLink: './test/sample/cli/quickStart.tar.gz',
        prepareCmd: 'npm i',
        runCmd: './node_modules/.bin/docway --config ./doc.js',

        display: {
            files: [{
                target: path.join(__dirname, './cli/quickStart/doc.js')
            }]
        }
    }]
};
