const fs = require('fs');

const trees = fs.readFileSync('Day3.txt', 'utf8');


const splitLines = trees.split('\n');

let count = 0;

splitLines.forEach((row, index) => {
    const splitTree = row.split('');
    const moveRight = splitTree[index + index + index]
    if(moveRight === '#') {
        count ++;
    }
})
console.log(count);