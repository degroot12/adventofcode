const fs = require('fs');

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
    if (Object.values(counter).indexOf(persons.length) > -1) {
        count++
     }

    
    counter = {}


    
}

console.log(count)

