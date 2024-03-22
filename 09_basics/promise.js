//thing to rememnber promise is an object in js
const promiseOne = new Promise(function(resolve, reject){ // a promise always contain a resolve and reject
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){ // it will be a call back function
    setTimeout(function(){
        resolve({username: "yash", email: "yash@example.com"})// this resolve will return the value and we can also enter data in this
    }, 1000)
})

promiseThree.then(function(user){ //this then will make a direct connection with the resolve 
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) { // for no error resolve the statement/input
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')// thsi will give error as the reject will be invoked 
        }
    }, 1000)
})

 promiseFour       // here we can declare the promise in variable as it will throw error and to overcome this we will use channing
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){  // .catch will be used to catch error which will be rejected
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) // this will always be executed


const promiseFive = new Promise(function(resolve, reject){ // in this we will use to handel promise using async
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try { // this try block will be used to handel for any error gracefully and the code will run smoothly
        const response = await promiseFive //it is same as then and catch but it will wait for a task to be completed then it will move ahead this will be used in data base connections
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // this might take some time 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary') // same above implimentation using try catch method using this method using this and catch is fast then out previous async approach as this blocks will be implemented one after another without waiting
.then((response) => {
    return response.json() // this will return json response
})
.then((data) => {
    console.log(data); // this will handel above json response , this is can be called  called using cahinninh/ thenable  
})
.catch((error) => console.log(error)) this will catch any wrror occured

// promise.all
