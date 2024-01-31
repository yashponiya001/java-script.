//High order loops in array
// for of

// ["", "", ""]
// [{}, {}, {}] empty arrays

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"// we can also use this in strings   
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)  
}

// Maps have key value pair and there is no duplicate value in maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // by using these [] we can destructure our array to access our key and vakues in our map seperately
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'// there are other ways to iterate objects
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
