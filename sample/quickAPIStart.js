'use strict';

const path = require('path');

module.exports = {
    name: 'Quick API Example',
    samples: [{
        name: 'quick start',
        directory: path.join(__dirname, './api/quickStart'),
        prepareCmd: ['ls', 'npm i && npm update', 'cat quickStart.js'],
        runCmd: 'node quickStart.js',

        display: {
            beforeRun: {
                files: [{
                    target: path.join(__dirname, './api/quickStart/quickStart.js')
                }]
            }
        }
    }]
};
