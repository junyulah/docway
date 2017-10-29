'use strict';

const path = require('path');

module.exports = {
    name: 'Quick CLI Example',
    samples: [{
        name: 'check cli options',
        directory: path.join(__dirname, './cli/options'),
        link: 'https://github.com/LoveKino/docway/tree/master/sample/cli/options',
        prepareCmd: 'npm i && npm update',
        runCmd: './node_modules/.bin/docway -h'
    }, {
        name: 'quick start',
        directory: path.join(__dirname, './cli/quickStart'),
        link: 'https://github.com/LoveKino/docway/tree/master/sample/cli/quickStart',
        downloadLink: 'https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz',
        prepareCmd: 'npm i && npm update',
        runCmd: './node_modules/.bin/docway --config ./doc.js',

        display: {
            beforeRun: {
                files: [{
                    target: path.join(__dirname, './cli/quickStart/doc.js')
                }]
            },

            afterRun: {
                files: [{
                    target: path.join(__dirname, './cli/quickStart/README.md')
                }]
            }
        }
    }]
};
