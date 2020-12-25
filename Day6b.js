const fs = require('fs');
const { compileFunction } = require('vm');

const groups = fs.readFileSync('Day6.txt', {encoding: 'utf-8'}).split('\n\n');

let count = 0;

let counter = {

}

for(i = 0; i < groups.length; i++) {
    const persons = groups[i].split('\n')
    for(j=0;j<persons.length; j++) {
        const totalSplit = persons[j].split('');
        totalSplit.forEach((letter) => {
            if (counter[letter]){
                counter[letter]++;
            } else {
                counter[letter] = 1;
            }
        })   
    }
        Object.values(counter).forEach((letterCount) => {
            if(letterCount === persons.length) {
                count ++
            }
        })
    counter = {}   
}

console.log(count)

