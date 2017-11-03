const chalk = require('chalk');

const log = console.log; // eslint-disable-line

module.exports = {
    hint: (str) => {
        log(chalk.keyword('orange')(str));
    },
    info: (str) => {
        log(str);
    },
    success: (str) => {
        log(chalk.green(str));
    },
    error: (str) => {
        log(chalk.red(str));
    }
};
