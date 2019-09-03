const read = require('./public/main');
read.readFile('text.txt')
    .then(text => console.log(text))
    .catch(err => console.log(err));