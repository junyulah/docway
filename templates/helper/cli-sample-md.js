'use strict';

let cliCmdTpl = require('./cli-md');

module.exports = ({
    name,
    items
}) => {
    return `## ${name}

${items.map(({name, cmd, stdout, stderr, options}) => {
        return `- ${name}

${renderList(options.render && options.render.before)}

${cliCmdTpl({cmd, stdout, stderr})}
`;
    }).join('\n')}`;
};

let renderList = (items) => {
    if(!items) return '';
    return items.map(renderCodeItem).join('');
};

let renderCodeItem = ({code, type, title}) => {
    return `${title}

\`\`\`${type}
${code}
\`\`\``;
};
