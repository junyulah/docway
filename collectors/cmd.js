'use strict';

let {
    exec
} = require('../src/util');

/**
 * collect information ny run a command
 */

module.exports = ({
    cmd,
    options = {}
}) => {
    let newPath = process.env.PATH + ':' + options.cwd;
    let cmdOptions = Object.assign({
        env: Object.assign({}, process.env, {
            PATH: newPath
        })
    }, options);

    return exec(cmd, cmdOptions);
};
