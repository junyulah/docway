'use strict';

const path = require('path');

module.exports = {
    name: 'Quick CLI Example',
    samples: [{
        name: 'check cli options',
        directory: path.join(__dirname, './cli/options'),
        link: './sample/cli/options',
        prepareCmd: 'npm i && npm update',
        runCmd: './node_modules/.bin/docway -h'
    }, {
        name: 'quick start',
        directory: path.join(__dirname, './cli/quickStart'),
        link: './sample/cli/quickStart',
        downloadLink: './sample/cli/quickStart.tar.gz',
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
