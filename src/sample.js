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

let runSample = (sample) => {
    let {
        prepareCmd,
        runCmd,
        checkResult = noop,
        directory
    } = sample;

    return (prepareCmd ? exec(prepareCmd, {
        cwd: directory
    }) : Promise.resolve()).then(() => {
        return exec(runCmd, {
            cwd: directory
        });
    }).then((ret) => {
        return Promise.resolve(checkResult(ret, sample)).then(() => ret);
    });
};

module.exports = {
    runSamples: ({
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
    },

    runSample
};

const noop = () => {};
