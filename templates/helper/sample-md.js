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
        return `### [${sample.name}](${getLink(sample.link, sample.directory, dirTarget)}) ${renderDownload(sample, dirTarget)} ${renderAnimationLink(imgPath, dirTarget)}

${renderFiles(beforeRun && beforeRun.files, dirTarget)}

- run sample

${cliCmdTpl({cmd: sample.runCmd, stdout, stderr})}

${afterRun? `- view the effect: ${renderFilesToLinks(afterRun.files, dirTarget)}
`: ''}
`;
    }).join('\n')}`;
};

let renderDownload = (sample) => {
    return sample.downloadLink? `<span style="font-size: 14px">[[download]](${sample.downloadLink})</span>`: '';
};

let renderAnimationLink = (imgPath, dirTarget) => {
    return imgPath? `<span style="font-size: 14px">[[show]](${getLink(null, imgPath, dirTarget)})</span>`: '';
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
