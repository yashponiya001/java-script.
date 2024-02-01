const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);    in this we are printing the value of accumulator and currentvalue to see how the program is working
//     return acc + currval   //using a return key word is must while using oarenthesis
// }, 0)  // this zero is used to initialize the accumulator value to 0 at the begining it can be any no, that we want to start the program

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // here item indicate to the item in array

console.log(priceToPay);
