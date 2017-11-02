const chalk = require('chalk');

module.exports = {
    hint: (str) => {
        console.log(chalk.keyword('orange')(str));
    },
    info: (str) => {
        console.log(str);
    },
    error: (str) => {
        console.error(chalk.red(str));
    }
};
