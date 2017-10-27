'use strict';

const titleTpl = require('../templates/helper/node/title-md');
const installTpl = require('../templates/helper/node/install-md');
const licenseTpl = require('../templates/helper/license-refer-md');
const cliTpl = require('../templates/helper/cli-md');
const cliSampleTpl = require('../templates/helper/cli-sample-md');

module.exports = ({
    module,
    cliOptions,
    licensePath,
    cliSamples
}) => {
    return `${titleTpl(module.name)}

${installTpl(module.name)}

${cliOptions?`## CLI options

${cliTpl(cliOptions)}` : ''}

${cliSamples? cliSampleTpl(cliSamples) : ''}

${licenseTpl(module.name, module.license, licensePath)}
`;
};
