'use strict';

const titleTpl = require('../templates/helper/node/title-md');
const installTpl = require('../templates/helper/node/install-md');
const licenseTpl = require('../templates/helper/license-refer-md');
const sampleTpl = require('../templates/helper/sample-md');

module.exports = ({
    topic,
    features,

    module,
    licensePath,

    apiSamples,
    moreApiSamples,

    cliSamples,
    moreCLISamples
}) => {
    return `${titleTpl(module.name)}
${topic}

${features? `## Features
${features.map((feature) => `- ${feature}`).join('\n')}
`: ''}

${installTpl(module.name)}

${cliSamples? sampleTpl(cliSamples) : ''}

${moreCLISamples? `see more CLI samples: ${moreCLISamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${apiSamples? sampleTpl(apiSamples) : ''}

${moreApiSamples? `see more API samples: ${moreApiSamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${licenseTpl(module.name, module.license, licensePath)}
`;
};
