'use strict';

const titleTpl = require('../templates/helper/node/title-md');
const installTpl = require('../templates/helper/node/install-md');
const licenseTpl = require('../templates/helper/license-refer-md');
const sampleTpl = require('../templates/helper/sample-md');
const docToolTpl = require('../templates/helper/doc-tool-md');
const toc = require('markdown-toc');

let renderBody = ({
    features,

    module,
    licensePath,

    apiSamples,
    moreApiSamples,

    cliSamples,
    moreCLISamples
}) => {
    return `${features? `## Features
${features.map((feature) => `- ${feature}`).join('\n')}
`: ''}

${installTpl(module.name)}

${cliSamples? sampleTpl(cliSamples) : ''}

${moreCLISamples? `see more CLI samples: ${moreCLISamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${apiSamples? sampleTpl(apiSamples) : ''}

${moreApiSamples? `see more API samples: ${moreApiSamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${licenseTpl(module.name, module.license, licensePath)}

${docToolTpl()}
`;
};

module.exports = (content) => {
    let body = renderBody(content);
    return `
${titleTpl(content.module.name)}
${content.topic? `> ${content.topic}`: ''}

## Table of Contents

${toc(body).content}

${body}`;
};
