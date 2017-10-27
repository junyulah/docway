'use strict';

module.exports = ({
    cmd,
    stdout,
    stderr
}) => {
    return `\`\`\`
[root@localhost ~]# ${cmd} 
${stdout || stderr}
\`\`\``;
};
