'use strict';

const {
    runSample
} = require('..');
const path = require('path');
const promisify = require('es6-promisify');
const {
    CommandCapture,
    imagesToGif
} = require('anipic');
const fs = require('fs');
const mkdirp = promisify(require('mkdirp'));
const readFile = promisify(fs.readFile);

/**
 * collect information from cli example
 */

module.exports = ({
    samples,
    options
}, collector, config) => {
    return runSamples(samples, options, collector, config).then((sampleInfos) => {
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

let runSamples = ({
    samples,
    name,
    options
}, sampleOptions, collector, config) => {
    let prefix = sampleOptions.prefix || collector.name;
    let imgDir = sampleOptions.imgDir || path.join(config.docResDir, 'images');

    return mkdirp(imgDir).then(() => {
        return Promise.all(
            samples.map((sample, index) => {
                let commandCapture = new CommandCapture(config.captureOptions);

                let customExecutor = sampleOptions.capture ? (command, options) => {
                    return commandCapture.exec(command, options);
                } : undefined;

                return runSample(sample, customExecutor).then(({
                    stdout,
                    stderr
                }) => {
                    let imgPath = null;
                    if (sampleOptions.capture) {
                        imgPath = path.join(imgDir, `${prefix}-sample-${index}.gif`);
                        imagesToGif(commandCapture.images, imgPath);
                    }

                    return {
                        stdout,
                        stderr,
                        sample,
                        showPath: imgPath
                    };
                });
            })
        ).then((items) => {
            return {
                samples: items,
                name,
                options
            };
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

let collectFileInfos = (files, directory) => {
    return Promise.all(files.map(({
        target,
        link
    }) => {
        let rel = path.relative(directory, target);

        return readFile(target, 'utf-8').then((content) => {
            return {
                link,
                content,
                relativePath: rel,
                filePath: target,
                type: path.extname(target).substring(1)
            };
        });
    }));
};
