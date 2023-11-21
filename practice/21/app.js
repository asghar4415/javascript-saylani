// setTimeout is a function that takes two arguments: a callback function and a time in milliseconds. The callback function is called after the specified time has elapsed. In this case, we are passing an anonymous function as the callback.

console.log('Hello World!');
setTimeout(function () {
    console.log('Hello World Again!');
}, 1000);
console.log('Hello World!');

// the anonymous function is called after 1000 milliseconds (1 second). The output of the above code is as follows: 
// Hello World!
// Hello World!
// Hello World Again!

// The first and third lines are printed immediately, while the second line is printed after 1 second. This is because the anonymous function is called after 1 second, but the program does not wait for it to finish executing before moving on to the next line.

// The setTimeout function is asynchronous. This means that it does not block the execution of the program. Instead, it executes the callback function after the specified time has elapsed, and the program continues to execute the next line of code.


//setInterval:

var timer = setInterval(function () {
    console.log('Hello World!');
}, 1000);

// The setInterval function is similar to the setTimeout function, except that it calls the callback function repeatedly after the specified time has elapsed. In this case, the callback function is called every 1000 milliseconds (1 second).

function stopTimer() {
    console.log('Stopping the timer');
    clearInterval(timer);
}

