// map 
// filter
// reduce

// map:
// 1. map is a method of array
// 2. map is used to iterate over an array
// 3. map returns a new array
// 4. map doesn't change the size of the original array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map(function (value, index, array) {
//     return value * 2;

// });
// console.log(arr);
// console.log(arr2);

//find: 
// 1. find is a method of array. 
// 2. find is used to find the first element of an array
// 3. find returns the value of the first element in an array that pass a test (provided as a function)

// var arr = [1, 2, 3, 4, 5];
// var findValue = arr.find(function (value, index, array) {
//     return value === 4;

// });
//it will return the value of the first element that pass the test

// console.log(findValue);

// forEach:
// 1. forEach is a method of array
// 2. forEach is used to iterate over an array
// 3. forEach doesn't return anything (undefined)
// 4. forEach doesn't change the size of the original array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.forEach(function (value, index, array) {
//     console.log(value, index, array);
// });
// It will return undefined because forEach doesn't return anything



//findIndex:
// 1. findIndex is a method of array
// 2. findIndex is used to find the index of the first element of an array
// 3. findIndex returns the index of the first element in an array that pass a test (provided as a function)

// var arr = [1, 2, 3, 4, 5];
// var findIndexValue = arr.findIndex(function (value, index, array) {
//     return value === 4;

// });
// console.log(findIndexValue);
//it will return the index of the first element that pass the test

//filter:
// 1. filter is a method of array
// 2. filter is used to filter out elements of an array
// 3. filter returns a new array
// 4. filter doesn't change the size of the original array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.filter(function (value, index, array) {
//     return value > 2;

// });
// console.log(arr2);
// it will return a new array with the elements that pass the test
//important function

//reduce:
// 1. reduce is a method of array
// 2. reduce is used to reduce the array to a single value
// 3. reduce takes a callback function with two parameters ('accumulator', 'currentValue')
// 4. reduce has an optional parameter ('initialValue')

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(function (accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue;

// }, 0);
// console.log(sum);
//it will return the sum of the array

//example 2
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(function (accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue;

// }, 10);
// console.log(sum);
//it will return the sum of the array + 10
//10 is the initial value

//example 3 (using objects)
// let arr = [{
//         name: 'Asabeneh',
//         age: 150
//     },
//     {
//         name: 'Brook',
//         age: 50
//     },
//     {
//         name: 'Eyo',
//         age: 100
//     },
//     {
//         name: 'Elias',
//         age: 22
//     }
// ];
// let sum = arr.reduce(function (accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue.age;

// }, 0);
// console.log(sum);


// const userDetails = (fname, ...rest) =>
// {
//     console.log(fname, rest);
// }

// userDetails("Asabeneh", 250, "Finland", "Helsinki", true);
// it will return Asabeneh [250, "Finland", "Helsinki", true]
//fname is a normal parameter and rest is a rest parameter
//it is used for infinite number of parameters
//rest parameter should be the last parameter
//rest parameter is an array

//spread operator
// let numbers = [1, 2, 3];
// let sum = (a, b, c) => {
//     return a + b + c;
// }
// console.log(sum(...numbers));
//it will return 6

//promises:
//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
//A Promise has four states:
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

// let promise = new Promise(function (resolve, reject) {
//     let x = 1 + 1;
//     if (x == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// }
// );
// promise.then(function (message) {
//     console.log("This is in the then " + message);
// }).catch(function (message) {
//     console.log("This is in the catch " + message);
// });


//async and await

// async function: 
// 1. async functions are prefixed with the async keyword
// 2. await keyword waits for an asynchronous operation to be completed
// 3. await keyword can only be used inside async functions
// 4. async functions always return a promise
// 5. In case of fulfilled/rejected, the value of the return statement inside the async function is returned

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if(43 > 10)
//         resolve('Success');
//         else
    
//         reject('Failed');
//     }, 3000);
// }
// );

// async function asyncFunc() {
//     try {
//         const result = await promise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunc();
//it will return Success after 3 seconds
//if we change the condition to 43 < 10, it will return Failed after 3 seconds

//async and await with fetch:

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// fetchUsers();
//it will return an array of objects with users data
//fetch is a web API which is used to make http requests to get data from a server or to send data to a server to process it 
//fetch is a promise based API
//API: Application Programming Interface 
//API is a software intermediary that allows two applications to talk to each other
//Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
//API is a messenger that takes requests and tells the system what you want to do and then returns the response back to you


//REST API: Representational State Transfer
//REST API is an architectural style for building APIs
//REST API is a standardized architecture style for creating a Web Service API
//REST API uses HTTP protocol for data communication

//REST API has the following characteristics:
//1. REST API is stateless
//2. REST API is cacheable
//3. REST API has a client-server architecture
//4. REST API has a uniform interface
//5. REST API has layered system


