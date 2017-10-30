'use strict';

const packageCollector = require('../collectors/node/package');
const path = require('path');
const sampleCollector = require('../collectors/sample');
const simpleDocTemplate = require('../templates/simple/docTemplate.js');
const simpleSampleDocTemplate = require('../templates/simple/sampleTemplate');

module.exports = {
    template: simpleDocTemplate,

    target: path.join(__dirname, '../README.md'),

    content: {
        topic: 'Generate documents for a project.',
        features: [
            'Plugin based. Which means we hope you just need to require suitable plugins.',
            'Tools and libraries exposed. Which means you can customize your own templates or collectors easily.',
            '[Sample standard](./doc/sampleStandard.md). We try to make a simple sample standard which we can make sample easily to read, download, run...'
        ],

        licensePath: './LICENSE',
        moreCLISamples: [{
            name: 'common CLI samples',
            link: './doc/cliSamples/common.md'
        }],

        moreApiSamples: [{
            name: 'common API samples',
            link: './doc/apiSamples/common.md'
        }]
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        args: [path.join(__dirname, '../package.json')]
    }, {
        name: 'cliSamples',
        collector: sampleCollector,
        args: [require('../sample/quickCLIStart.js'), {
            capture: true,
            prefix: 'quick-cli',
            imgDir: path.join(__dirname, './images')
        }]
    }, {
        name: 'apiSamples',
        collector: sampleCollector,
        args: [require('../sample/quickAPIStart.js')]
    }],

    subDocuments: [{
        target: path.join(__dirname, './cliSamples/common.md'),
        template: simpleSampleDocTemplate,
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            args: [require('../sample/quickCLIStart.js')]
        }]
    }, {
        target: path.join(__dirname, './apiSamples/common.md'),
        template: require('../templates/simple/sampleTemplate'),
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            args: [require('../sample/quickAPIStart.js')]
        }]
    }]
};
