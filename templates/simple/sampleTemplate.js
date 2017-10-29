'use strict';

const sampleTpl = require('../helper/sample-md');

module.exports = ({
    samples
}) => {
    return `${samples? sampleTpl(samples) : ''}`;
};
