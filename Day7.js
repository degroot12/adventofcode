const fs = require('fs');

const bags = fs.readFileSync('Day7.txt', {encoding: 'utf-8'}).split('\n');

let count = 0;

let newColor;
let uniql=[];
let newUniq=[];
let newColorNext;

const entryColor = 'shiny gold'
     

const allColors = {
    
}

bags.forEach(bag => {
    const firstSplit = bag.split(',');
    let beginColor = firstSplit[0].split(' ');
    let startColor = beginColor[0] + ' ' + beginColor[1];
    let firstBagColor = beginColor[5] + ' ' + beginColor[6];
    if(!firstBagColor){
        firstBagColor = beginColor[5] + ' ' + beginColor[6];
    }

    if(!allColors[firstBagColor]){
        allColors[firstBagColor] = [];
    }
        allColors[firstBagColor].push(startColor);


    for(i=1;i<firstSplit.length;i++){
        let secondSplit = firstSplit[i].split(' ');
        let newBagColor = secondSplit[2] + ' ' + secondSplit[3];
        if(!allColors[newBagColor]){
            allColors[newBagColor] = [];
        }
            allColors[newBagColor].push(startColor); 
    }
    console.log(allColors[newBagColor].startColor)
})


// let arr = Object.keys(allColors)


// arr.forEach(blabla => {
//     if(blabla === entryColor){
//         count ++
//     }
// })

// console.log(arr)





//     if((bag.includes('shiny gold')) && bag.indexOf('shiny gold') !== 0){
//         count++


//         let splitBag = bag.split(' ')
//         newColor = splitBag[0] + ' ' + splitBag[1]
//         bags.forEach(bag => {
//             if((bag.includes(newColor)) && bag.indexOf(newColor) !== 0){
//                 function unique_char(newColor)
//                 {
//                     let idx = uniql.indexOf(newColor);
//                     if(idx === -1)
//                         {
//                         uniql.push(newColor)
//                         }
//                     return uniql;  
//                 }
//                 unique_char(newColor);
//                 let newSplitBag = bag.split(' ')
//                 newColorNext = newSplitBag[0] + ' ' + newSplitBag[1]  
//                 bags.forEach(bag => {
//                     if((bag.includes(newColorNext)) && bag.indexOf(newColorNext) !==0){
//                         function unique_charTwo(newColorNext)
//                         {
//                             let newIdx = newUniq.indexOf(newColorNext);
//                             if(newIdx === -1)
//                                 {
//                                 newUniq.push(newColorNext)
//                                 }
//                             return newUniq;  
//                         }
//                         unique_charTwo(newColorNext)  
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log(count)
// console.log(newUniq)

// count += uniql.length + newUniq.length
// console.log(count)

// //['pale yellow', 'dim gold', 'dull salmon', 'dull purple', 'muted indigo', 'posh coral']