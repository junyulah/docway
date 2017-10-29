'use strict';

let {
    exec
} = require('./util');

/**
 * sample = {
 *    name,
 *    directory,
 *    link,
 *    downloadLink, 
 *    prepareCmd,
 *    runCmd,
 *
 *    display: {
 *      files: [{
 *         target,
 *         link
 *      }]
 *    }
 * }
 *
 * samples = {
 *     name,
 *     samples: [sample],
 *     options
 * }
 */

module.exports = {
    runSample: ({
        name,
        samples,
        options
    }) => {
        return Promise.all(
            samples.map((sample) => {
                return runSample(sample).then(({
                    stdout,
                    stderr
                }) => {
                    return {
                        sample,
                        stdout,
                        stderr
                    };
                });
            })
        ).then((items) => {
            return {
                name,
                samples: items,
                options
            };
        });
    }
};

let runSample = ({
    prepareCmd,
    runCmd,
    directory
}) => {
    return (prepareCmd ? exec(prepareCmd, {
        cwd: directory
    }) : Promise.resolve()).then(() => {
        return exec(runCmd, {
            cwd: directory
        });
    });
};
