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
 *    postCmd,
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

let runSample = (sample, customExecutor) => {
    let executor = customExecutor || exec;
    let {
        prepareCmd,
        postCmd,
        runCmd,
        checkResult = noop,
        directory
    } = sample;

    // TODO more validations
    if (!runCmd) {
        throw new Error('missing run command.');
    }

    return (prepareCmd ? executor(prepareCmd, {
        cwd: directory
    }) : Promise.resolve()).then(() => {
        return executor(runCmd, {
            cwd: directory
        }).then((ret) => {
            if (!postCmd) return ret;
            return executor(postCmd, {
                cwd: directory
            }).then(() => {
                return ret;
            });
        });
    }).then((ret) => {
        return Promise.resolve(checkResult(ret, sample)).then(() => ret);
    });
};

module.exports = {
    runSamples: ({
        samples,
        name,
        options
    }, customExecutor) => {
        return Promise.all(
            samples.map((sample) => {
                return runSample(sample, customExecutor).then(({
                    stdout,
                    stderr
                }) => {
                    return {
                        stdout,
                        stderr,
                        sample
                    };
                });
            })
        ).then((items) => {
            return {
                samples: items,
                name,
                options
            };
        });
    },

    runSample
};

const noop = () => {};
