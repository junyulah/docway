'use strict';

const cliCmdTpl = require('./cli-md');
const path = require('path');

const downloadLogo = 'https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/download.svg';
const playLogo = 'https://raw.githubusercontent.com/LoveKino/docway/master/templates/logo/play.svg';

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
    return sample.downloadLink? logoLink(downloadLogo, sample.downloadLink, 'download'): '';
};

let logoLink = (logoLink, realLink, alt='') => {
    return `<a href="${realLink}"><img src="${logoLink}" style="height:30px" alt=${alt}></a>`;
};

let renderAnimationLink = (imgPath, dirTarget) => {
    return imgPath? logoLink(playLogo, getLink(null, imgPath, dirTarget), 'animation'): '';
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
