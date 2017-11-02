'use strict';

/**
 * The way to build a documents, require two major steps:
 * 1. get the document information from project or other places.
 *
 * 2. joint those information with some templates.
 */

const {
    runSample,
    runSamples
} = require('./sample');
const path = require('path');
const {
    writeFile
} = require('./util');
const promisify = require('es6-promisify');
const log = require('./log');
const mkdirp = promisify(require('mkdirp'));

/**
 *
 * config = {
 *   template,
 *   target,
 *   content,
 *   collectors: [{
 *      name: '',
 *      collector: () -> {},
 *      data
 *   }]
 * }
 *
 * template: (content) -> String
 *
 * target: filePath or function
 */

let compile = (config) => {
    // process config
    // TODO check collectors, warning repeated name
    let collectors = config.collectors || [];
    let subDocuments = config.subDocuments || [];
    config.docResDir = config.docResDir || path.join(process.cwd(), '_docway_docRes');

    return mkdirp(config.docResDir).then(() => {
        return Promise.all(collectors.map((item) => {
            let params = [item.data, item, config];

            // run collector
            return Promise.resolve(item.collector(...params)).then((data) => {
                config.content[item.name] = data;
            });
        })).then(() => {
            // compile sub documents
            return Promise.all(subDocuments.map((subdocConfig, index) => {
                // content of subdocConfig
                subdocConfig.content = subdocConfig.content || {};
                subdocConfig.content.parent = subdocConfig.content.parent || config.content;
                subdocConfig.parent = subdocConfig.parent || config;

                subdocConfig.docResDir = subdocConfig.docResDir || path.join(config.docResDir, `subdocs/${index}`);
                subdocConfig.target = subdocConfig.target || path.join(subdocConfig.docResDir, 'index.md');
                subdocConfig.captureOptions = subdocConfig.captureOptions || config.captureOptions;
                return compile(subdocConfig);
            }));
        }).then(() => {
            let str = config.template(config.content, config);

            if (!config.target) {
                return str;
            }

            return writeFile(config.target, str, 'utf-8');
        });
    });
};

module.exports = {
    compile: (...args) => {
        return compile(...args).then((data) => {
            log.info('[success] finished to build documents.');
            return data;
        }).catch(err => {
            log.error(err.toString());
            throw err;
        });
    },

    runSample,

    runSamples
};
