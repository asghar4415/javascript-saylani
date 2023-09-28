// Loops

// loops are used to repeat a block of code a certain number of times

var msg = 'Hello World!';

// for loop
document.write('<h1>For Loop</h1>');
for(var i = 0; i < 10; i++) {
  document.write(msg + '<br>');
}

// while loop
document.write('<h1>While Loop</h1>');
var i = 0;
while(i < 10) {
    document.write(msg + '<br>');

  i++;
}

// do while loop
document.write('<h1>Do While Loop</h1>');
var i = 0;
do {
    document.write(msg + '<br>');
  i++;
} while(i < 10);
