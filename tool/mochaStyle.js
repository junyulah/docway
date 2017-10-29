'use strict';

let {
    runSample
} = require('..');

module.exports = ({
    samples,
    name
}) => {
    describe(name, () => {
        samples.forEach((sample) => {
            it(sample.name, () => {
                return runSample(sample);
            });
        });
    });
};
