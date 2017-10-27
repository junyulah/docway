'use strict';

let {
    runCLISample
} = require('../..');

/**
 * collect information from cli example
 */

module.exports = (cliExampleJsFile) => {
    return Promise.resolve(require(cliExampleJsFile)).then((sample) => {
        return runCLISample(sample, {
            filePath: cliExampleJsFile
        });
    });
};
