'use strict';

/**
 * The way to build a documents, require two major steps:
 * 1. get the document information from project or other places.
 *
 * 2. joint those information with some templates.
 */

let {
    runSample,
    runSamples
} = require('./sample');
let {writeFile} = require('./util');

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

let compile = (config) => {
    let collectors = config.collectors || [];
    let subDocuments = config.subDocuments || [];

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
        return Promise.all(subDocuments.map((subdocConfig) => {
            subdocConfig.content = subdocConfig.content || {};
            subdocConfig.content.parent = subdocConfig.content.parent || config.content;
            return compile(subdocConfig);
        }));
    }).then(() => {
        let str = config.template(config.content, config);

        if (!config.target) {
            return str;
        }

        return writeFile(config.target, str, 'utf-8');
    });
};

module.exports = {
    compile,

    runSample,

    runSamples
};
