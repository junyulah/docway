'use strict';

const promisify = require('es6-promisify');
let fs = require('fs');
const readFile = promisify(fs.readFile);

/**
 * read node project package information
 */
module.exports = (packageJsonPath) => {
    return readFile(packageJsonPath, 'utf-8').then((str) => JSON.parse(str));
};
