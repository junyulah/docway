'use strict';

let child_process = require('child_process');

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

module.exports = {
    exec
};
