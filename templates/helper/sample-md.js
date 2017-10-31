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

${samples.map(({beforeRun, afterRun, sample, stdout, stderr, showPath}) => {
        return `### [${sample.name}](${getLink(sample.link, sample.directory, dirTarget)}) ${renderDownload(sample, dirTarget)} ${renderAnimationLink(showPath, dirTarget)}

${renderFiles(beforeRun && beforeRun.files, dirTarget)}

- run sample

${cliCmdTpl({cmd: sample.runCmd, stdout, stderr})}

${afterRun? `- view the effect: ${renderFilesToLinks(afterRun.files, dirTarget)}
`: ''}
`;
    }).join('\n')}`;
};

let renderDownload = (sample) => {
    return sample.downloadLink? `[[download]](${sample.downloadLink})`: '';
};

let renderAnimationLink = (showPath, dirTarget) => {
    return showPath? `[[show]](${getLink(null, showPath, dirTarget)})`: '';
};

let renderFiles = (files = [], dirTarget) => {
    return files.map(({relativePath, filePath, content, type, link}) => {
        return `- [${relativePath}](${getLink(link, dirTarget, filePath)})

\`\`\`${type}
${content}
\`\`\``;
    }).join('\n');
};

let renderFilesToLinks = (files = [], dirTarget) => {
    return files.map(({filePath, relativePath, link}) => {
        return `[${relativePath}](${getLink(link, dirTarget, filePath)})`;
    }).join(' ');
};

let getLink = (link, filePath, dirTarget) => {
    return link || path.relative(dirTarget, filePath);
};
