'use strict';

const path = require('path');

module.exports = {
    name: 'Quick API Example',
    samples: [{
        name: 'quick start',
        directory: path.join(__dirname, './api/quickStart'),
        link: './sample/api/quickStart',
        prepareCmd: 'npm i && npm update',
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
