'use strict';

const {
    cliSample,
    cliIt
} = require('../..');
const promisify = require('es6-promisify');
const path = require('path');
const fs = require('fs');

const readFile = promisify(fs.readFile);

const eg0 = './fixture/eg0/doc.js';

module.exports = Promise.all([
    readFile(path.join(__dirname, eg0), 'utf-8')
]).then(([conf0]) => {
    return cliSample('Simple CLI examples', [
        cliIt('quick start', `docway --config ${eg0}`, {
            render: {
                before: [{
                    title: 'doc.js content',
                    code: conf0,
                    type: 'js'
                }]
            }
        })
    ], {
        binDir: path.join(__dirname, '../../bin')
    });
});
