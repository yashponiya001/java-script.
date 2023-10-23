const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) here in this method dc_heroes is added as an element in the marvel array as array created in an array output is ["thor", "Ironman", "spiderman"["superman", "flash", "batman"]] so here dc heroes are single element in this
//output ["thor", "Ironman", "spiderman"["superman", "flash", "batman"]]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);     to access flash we have to do like this which is not a good practice.

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  it will join the two array and return in a proper form ["thor", "Ironman", "spiderman","superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros] // this is spread method that will break the array in individual and return all the values this ... will break them into individual element 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method id a method that returns all the subarray concatenated recursivelly into a single array here we have to declare the depth of the array so to avoid any issue when you dont know the depth of th e array just use infinity  "flat(infinity)"
console.log(real_another_array);



console.log(Array.isArray("yash"))  //isArray it is used to know if the given input is array or not tells true or false
console.log(Array.from("yash"))  //Array.from will convert the string into array ['y','a','s','h']
console.log(Array.from({name: "yash"})) // interesting it will give an empty array cauise it can not directly convert the names to array cause it needs some keys or arrays to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Array.of returns new array from the set of elements
