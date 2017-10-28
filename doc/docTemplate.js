'use strict';

const titleTpl = require('../templates/helper/node/title-md');
const installTpl = require('../templates/helper/node/install-md');
const licenseTpl = require('../templates/helper/license-refer-md');
const cliTpl = require('../templates/helper/cli-md');
const sampleTpl = require('../templates/helper/sample-md');

module.exports = ({
    module,
    cliOptions,
    licensePath,
    cliSamples,
    moreCLISamples
}) => {
    return `${titleTpl(module.name)}

${installTpl(module.name)}

${cliOptions?`## CLI options

${cliTpl(cliOptions)}` : ''}

${cliSamples? sampleTpl(cliSamples) : ''}

${moreCLISamples? `see more CLI samples: ${moreCLISamples.map(({name, link}) => `[${name}](${link})`).join(' ')}`: ''}

${licenseTpl(module.name, module.license, licensePath)}
`;
};
