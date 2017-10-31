'use strict';

const packageCollector = require('../collectors/node/package');
const path = require('path');
const sampleCollector = require('../collectors/sample');
const simpleDocTemplate = require('../templates/simple/docTemplate.js');
const simpleSampleDocTemplate = require('../templates/simple/sampleTemplate');

module.exports = {
    template: simpleDocTemplate,

    docResDir: __dirname, // we need a doc resource dir which we can used to store images, documents, ...

    target: path.join(__dirname, '../README.md'),

    content: {
        features: [
            'Plugin based. Which means we hope you just need to require suitable plugins.',
            'Tools and libraries exposed. Which means you can customize your own templates or collectors easily.',
            '[Sample standard](./doc/sampleStandard.md). We try to make a simple sample standard which we can make sample easily to read, download, run...'
        ],
        licensePath: './LICENSE',
        moreCLISamples: [{
            name: 'common CLI samples',
            link: './doc/subdocs/0/index.md'
        }],
        moreApiSamples: [{
            name: 'common API samples',
            link: './doc/subdocs/1/index.md'
        }]
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        data: path.join(__dirname, '../package.json')
    }, {
        name: 'cliSamples',
        collector: sampleCollector,
        data: {
            samples: require('../sample/quickCLIStart.js'),
            options: {
                capture: true
            }
        }
    }, {
        name: 'apiSamples',
        collector: sampleCollector,
        data: {
            samples: require('../sample/quickAPIStart.js'),
            options: {
                capture: true
            }
        }
    }],

    subDocuments: [{
        name: 'common cli samples',
        template: simpleSampleDocTemplate,
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            data: {
                samples: require('../sample/quickCLIStart.js'),
                options: {
                    capture: true
                }
            }
        }]
    }, {
        name: 'common api samples',
        template: require('../templates/simple/sampleTemplate'),
        collectors: [{
            name: 'samples',
            collector: sampleCollector,
            data: {
                samples: require('../sample/quickAPIStart.js'),
                options: {
                    capture: true
                }
            }
        }]
    }]
};
