'use strict';

const path = require('path');

module.exports = {
    name: 'Quick API Example',
    samples: [{
        name: 'quick start',
        directory: path.join(__dirname, './api/quickStart'),
        link: './test/sample/api/quickStart',
        prepareCmd: 'npm i',
        runCmd: 'node quickStart.js',

        display: {
            files: [{
                target: path.join(__dirname, './api/quickStart/quickStart.js')
            }]
        }
    }]
};
