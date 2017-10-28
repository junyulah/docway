'use strict';

const sampleTpl = require('../templates/helper/sample-md');

module.exports = ({
    samples
}) => {
    return `${samples? sampleTpl(samples) : ''}`;
};
