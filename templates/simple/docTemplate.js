'use strict';

const titleTpl = require('../helper/title-md');
const installTpl = require('../helper/node/install-md');
const licenseTpl = require('../helper/license-refer-md');
const sampleTpl = require('../helper/sample-md');
const docToolTpl = require('../helper/doc-tool-md');
const toc = require('markdown-toc');

let renderBody = ({
    features,

    module,
    licensePath,

    apiSamples,
    moreApiSamples,

    cliSamples,
    moreCLISamples
}, config) => {
    return `${features? `## Features
${features.map((feature) => `- ${feature}`).join('\n')}
`: ''}

${installTpl(module.name)}

${cliSamples? sampleTpl(cliSamples, config) : ''}

${moreCLISamples? `See more CLI samples: ${moreCLISamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${apiSamples? sampleTpl(apiSamples, config) : ''}

${moreApiSamples? `See more API samples: ${moreApiSamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${licenseTpl(module.name, module.license, licensePath)}

${docToolTpl()}
`;
};

module.exports = (content, config) => {
    let body = renderBody(content, config);
    let topic = content.topic || (config.module && config.module.description);
    return `
${titleTpl(content.module.name)}
${topic? `> ${topic}`: ''}

## Table of Contents

${toc(body).content}

${body}`;
};
