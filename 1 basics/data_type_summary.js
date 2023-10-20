//  Primitive          <--- they us stack memory  ,we get the copy of the value amd the changes are done in that copy
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')           // remember java script is a dynamically typed language so we dont have to declare data type it will automatically set he data type

console.log(id === anotherId);   //symbols are used to give a specific id , as in this exampls id and anotherid have same value but they are not equal because of symbol as it gived them a unique id for themselves

// const bigNumber = 3456543576654356754n     ,this is big int we define it by adding a n in the end of the no



// Reference (Non primitive)      <---- these are stored in heap memory , we get the original value and the changes are done in original memory

// Array, Objects, Functions          all the refernce data type have the type of functions accept for function its data type is object function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {                   //this is object data type that store the value as value and key value
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
