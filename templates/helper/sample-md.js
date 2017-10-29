'use strict';

let cliCmdTpl = require('./cli-md');

module.exports = ({
    name,
    samples
}) => {
    return `## ${name}

${samples.map(({files, sample, stdout, stderr}) => {
        return `- [${sample.name}](${sample.link}) ${sample.downloadLink?`[[download]](${sample.downloadLink})` : ''}

${renderFiles(files)}

${cliCmdTpl({cmd: sample.runCmd, stdout, stderr})}
`;
    }).join('\n')}`;
};

let renderFiles = (files = []) => {
    return files.map(({relativePath, content, type, link}) => {
        return `[${relativePath}](${link})
\`\`\`${type}
${content}
\`\`\``;
    }).join('\n');
};
