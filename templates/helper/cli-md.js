'use strict';

module.exports = ({
    cmd,
    stdout,
    stderr
}) => {
    return `\`\`\`
$ ${cmd} 
${stdout || stderr}
\`\`\``;
};
