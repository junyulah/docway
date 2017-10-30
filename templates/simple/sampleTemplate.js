'use strict';

const sampleTpl = require('../helper/sample-md');
const toc = require('markdown-toc');

module.exports = ({
    samples
}, config) => {
    let body = samples? sampleTpl(samples, config) : '';
    return `
## Table of Contents
${toc(body).content}

${body}`;
};
