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
            return Promise.all([
                collectBeforeRun(item),
                collectAfterRun(item)
            ]).then(() => {
                return item;
            });
        })).then((samples) => {
            sampleInfos.samples = samples;
            return sampleInfos;
        });
    });
};

let collectBeforeRun = (item) => {
    if (item.sample.display && item.sample.display.beforeRun && item.sample.display.beforeRun.files) {
        return collectFileInfos(item.sample.display.beforeRun.files,
            item.sample.directory,
            item.sample.link
        ).then((files) => {
            item.beforeRun = item.beforeRun || {};
            item.beforeRun.files = files;
            return item;
        });
    } else {
        return item;
    }
};

let collectAfterRun = (item) => {
    if (item.sample.display && item.sample.display.afterRun && item.sample.display.afterRun.files) {
        return collectFileInfos(item.sample.display.afterRun.files,
            item.sample.directory,
            item.sample.link
        ).then((files) => {
            item.afterRun = item.afterRun || {};
            item.afterRun.files = files;
            return item;
        });
    } else {
        return item;
    }
};

let collectFileInfos = (files, directory, directoryLink) => {
    return Promise.all(files.map(({
        target,
        link
    }) => {
        let rel = path.relative(directory, target);
        link = link || path.join(directoryLink, rel);

        return readFile(target, 'utf-8').then((content) => {
            return {
                link,
                content,
                relativePath: rel,
                type: path.extname(target).substring(1)
            };
        });
    }));
};
