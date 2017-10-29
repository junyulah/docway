'use strict';

let cliCmdTpl = require('./cli-md');

module.exports = ({
    name,
    samples
}) => {
    return `## ${name}

${samples.map(({beforeRun, afterRun, sample, stdout, stderr}) => {
        return `### [${sample.name}](${sample.link}) ${sample.downloadLink?`[[download]](${sample.downloadLink})` : ''}

${renderFiles(beforeRun && beforeRun.files)}

- run sample

${cliCmdTpl({cmd: sample.runCmd, stdout, stderr})}

${afterRun? `- view the effect: ${renderFilesToLinks(afterRun.files)}
`: ''}
`;
    }).join('\n')}`;
};

let renderFiles = (files = []) => {
    return files.map(({relativePath, content, type, link}) => {
        return `- [${relativePath}](${link})

\`\`\`${type}
${content}
\`\`\``;
    }).join('\n');
};

let renderFilesToLinks = (files = []) => {
    return files.map(({relativePath, link}) => {
        return `[${relativePath}](${link})`;
    }).join(' ');
};
