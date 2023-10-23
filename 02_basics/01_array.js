// array

const myArr = [0, 1, 2, 3, 4, 5]   //declaration of an array
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);      //we access element by using there index in an array

// Array methods

// myArr.push(6)  //use to add element in an array
// myArr.push(7)
// myArr.pop()         //use to pop out the element in an array last element will be pop

// myArr.unshift(9)     //unshift will add 9 from the start and will remove the last element 
// myArr.shift()           shift will shift hte whole array by one index

// console.log(myArr.includes(9));       it will tell whether there is a value present in the array or not return type is boolean
// console.log(myArr.indexOf(3));            it will give the index of the element

// const newArr = myArr.join()              this method will convert the value of the array to a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      //this will not alter the original array and return the value [1,2] where it does not include the range given by the programer from the array, while the original array is still the same

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //in this method the output will bw[1,2,3] it does include the range, the main thing in this is the original array will be altered in this method this range of (1,3) will be removed from the original array
console.log("C ", myArr);
console.log(myn2);
