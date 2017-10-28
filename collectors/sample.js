'use strict';

const {
    runSample
} = require('..');
const path = require('path');
const promisify = require('es6-promisify');
let fs = require('fs');
const readFile = promisify(fs.readFile);

/**
 * collect information from cli example
 */

module.exports = (samples) => {
    return runSample(samples).then((sampleInfos) => {
        return Promise.all(sampleInfos.samples.map((item) => {
            if (item.sample.display && item.sample.display.files) {
                return Promise.all(item.sample.display.files.map(({
                    target,
                    link
                }) => {
                    let rel = path.relative(item.sample.directory, target);
                    link = link || path.join(item.sample.link, rel);

                    return readFile(target, 'utf-8').then((content) => {
                        return {
                            link,
                            content,
                            relativePath: rel,
                            type: path.extname(target).substring(1)
                        };
                    });
                })).then((files) => {
                    item.files = files;
                    return item;
                });
            } else {
                return item;
            }
        })).then((samples) => {
            sampleInfos.samples = samples;
            return sampleInfos;
        });
    });
};
