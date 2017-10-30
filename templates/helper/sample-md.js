'use strict';

const cliCmdTpl = require('./cli-md');
const path = require('path');

module.exports = ({
    name,
    samples
}, {
    target
}) => {
    let dirTarget = target? path.dirname(target): process.cwd();

    return `## ${name}

${samples.map(({beforeRun, afterRun, sample, stdout, stderr, imgPath}) => {
        let sampleLink = sample.link? sample.link: path.relative(dirTarget, sample.directory);
        let imgLink = imgPath && path.relative(dirTarget, imgPath);

        return `### [${sample.name}](${sampleLink}) ${sample.downloadLink?`[[download]](${sample.downloadLink})` : ''} ${imgPath?`[[animation]](${imgLink})`: ''}

${renderFiles(beforeRun && beforeRun.files, dirTarget)}

- run sample

${cliCmdTpl({cmd: sample.runCmd, stdout, stderr})}

${afterRun? `- view the effect: ${renderFilesToLinks(afterRun.files, dirTarget)}
`: ''}
`;
    }).join('\n')}`;
};

let renderFiles = (files = [], dirTarget) => {
    return files.map(({relativePath, filePath, content, type, link}) => {
        let fileLink = link || path.relative(dirTarget, filePath);
        return `- [${relativePath}](${fileLink})

\`\`\`${type}
${content}
\`\`\``;
    }).join('\n');
};

let renderFilesToLinks = (files = [], dirTarget) => {
    return files.map(({filePath, relativePath, link}) => {
        let fileLink = link || path.relative(dirTarget, filePath);
        return `[${relativePath}](${fileLink})`;
    }).join(' ');
};
