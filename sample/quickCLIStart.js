'use strict';

const path = require('path');

module.exports = {
    name: 'Quick CLI Example',
    samples: [{
        name: 'check cli options',
        directory: path.join(__dirname, './cli/options'),
        prepareCmd: 'npm i && npm update',
        runCmd: './node_modules/.bin/docway -h'
    }, {
        name: 'quick start',
        directory: path.join(__dirname, './cli/quickStart'),
        downloadLink: 'https://github.com/LoveKino/docway/raw/master/sample/cli/quickstart.tar.gz',
        prepareCmd: ['ls', 'npm i && npm update', 'cat doc.js'],
        runCmd: './node_modules/.bin/docway --config ./doc.js',
        postCmd: ['ls', 'cat README.md'],

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
