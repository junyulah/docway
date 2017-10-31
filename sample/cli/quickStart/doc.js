const packageCollector = require('docway/collectors/node/package');
const simpleDocTemplate = require('docway/templates/simple/docTemplate.js');
const path = require('path');

module.exports = {
    template: simpleDocTemplate,

    target: path.join(__dirname, './README.md'),

    content: {
        topic: 'Quick start test project.',
        features: [
            'This is feature 1',
            'This is feature 2'
        ],

        licensePath: './LICENSE'
    },

    collectors: [{
        name: 'module',
        collector: packageCollector,
        data: path.join(__dirname, './package.json')
    }],

    subDocuments: []
};
