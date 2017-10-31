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

    let cmdOptions = {
        cwd: directory
    };

    let prepareCmds = Array.isArray(prepareCmd) ? prepareCmd :
        (prepareCmd ? [prepareCmd] : []);
    let postCmds = Array.isArray(postCmd) ? postCmd :
        (postCmd ? [postCmd] : []);

    return executeCommands(prepareCmds, cmdOptions, executor).then(() => {
        return executor(runCmd, cmdOptions).then((ret) => {
            if (!postCmd) return ret;
            return executeCommands(postCmds, cmdOptions, executor).then(() => {
                return ret;
            });
        });
    }).then((ret) => {
        return Promise.resolve(checkResult(ret, sample)).then(() => ret);
    });
};

let executeCommands = (commands, options, executor) => {
    if (!commands.length) return Promise.resolve();
    return executor(commands[0], options).then(() => {
        return executeCommands(commands.slice(1), options, executor);
    });
};

const noop = () => {};

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
