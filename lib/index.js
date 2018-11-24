const ejs = require('ejs')
const fs = require('fs')
const stdin = require('get-stdin')
const argv = require('minimist')(process.argv.slice(2), {
    string: ['data'],
    alias: { d: 'data' }
});

if(!argv.data) {
    return console.error('Missing --data argument.\n')
}

let data;
try {   
    data = JSON.parse(fs.readFileSync(argv.data).toString())
} catch (error) {
    return console.error('Error parsing data file.\n', error)
}

stdin()
    .then(
        template => ejs.render(template, data),
        error => console.error('Error reading standard input.\n', error)
    )
    .then(
        renderedHtml => console.log(renderedHtml),
        error => console.error('Error rendering HTML.\n', error)
    )
    .catch(error => console.error('Error writing to standard output.\n', error))
