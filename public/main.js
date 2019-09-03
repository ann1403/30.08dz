const fs = require('fs');


function readFile(url) {
    return new Promise((res, rej) => {
        const text = fs.readFileSync(url, 'utf-8');
        res(text);
    })
}
module.exports = {
    readFile: readFile,
};