const {
    compile
} = require('docway');

compile({
    template: ({
        title
    }) => `${title}`,

    content: {
        title: 'test'
    }
});
