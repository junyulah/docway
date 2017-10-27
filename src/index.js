'use strict';

/**
 * The way to build a documents, require two major steps:
 * 1. get the document information from project or other places.
 *
 * 2. joint those information with some templates.
 */

let {
    exec
} = require('./util');
let {
    dirname
} = require('path');

/**
 *
 * config = {
 *   template,
 *   target,
 *   content,
 *   collectors: [{
 *      name: '',
 *      collector: () -> {},
 *      args: []
 *   }]
 * }
 *
 * template: (content) -> String
 *
 * target: filePath or function
 */
module.exports = {
    compile: (config) => {
        let collectors = config.collectors || [];

        // TODO check collectors, warning repeated name
        return Promise.all(collectors.map(({
            name,
            collector,
            args
        }) => {
            let params = args || [];
            return Promise.resolve(collector(...params)).then((data) => {
                config.content[name] = data;
            });
        })).then(() => {
            return config.template(config.content);
        });
    },

    cliSample: (name, items, options = {}) => {
        return {
            name,
            items,
            options
        };
    },

    cliIt: (name, cmdCode, options = {}) => {
        return {
            cmdCode,
            name,
            options
        };
    },

    runCLISample: (sample, {
        filePath
    }) => {
        return Promise.all(sample.items.map((item) => {
            let mergedOptions = Object.assign({
                cwd: dirname(filePath)
            }, sample.options, item.options);

            let path = (mergedOptions.env && mergedOptions.env.PATH) || process.env.PATH;

            if (mergedOptions.binDir) {
                path += `:${mergedOptions.binDir}`;
            }

            mergedOptions.env = Object.assign({}, mergedOptions.env || process.env, {
                PATH: path
            });

            return exec(item.cmdCode, mergedOptions).then(({
                cmd,
                stdout,
                stderr
            }) => {
                return {
                    name: item.name,
                    cmd,
                    stdout,
                    stderr,
                    options: item.options,
                    runOptions: mergedOptions
                };
            });
        })).then((items) => {
            return {
                name: sample.name,
                items,
                options: sample.options
            };
        });
    }
};
