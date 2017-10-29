'use strict';

let child_process = require('child_process');
let promisify = require('es6-promisify');
let fs = require('fs');
let path = require('path');
let mkdirp = promisify(require('mkdirp'));

let writeFileP = promisify(fs.writeFile);

/**
 * collect information ny run a command
 */

const exec = (cmd, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            child_process.exec(cmd, options, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        cmd,
                        stdout,
                        stderr
                    });
                }
            });
        } catch (err) {
            reject(err);
        }
    });
};

const writeFile = (file, content, options) => {
    return mkdirp(path.dirname(file)).then(() => {
        return writeFileP(file, content, options);
    });
};

module.exports = {
    exec,
    writeFile
};
