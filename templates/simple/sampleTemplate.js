'use strict';

const sampleTpl = require('../helper/sample-md');
const toc = require('markdown-toc');

module.exports = ({
    samples
}) => {
    let body = samples? sampleTpl(samples) : '';
    return `
## Table of Contents
${toc(body).content}

${body}`;
};
