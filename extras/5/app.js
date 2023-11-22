// creating elements

const newDiv = document.createElement('div');
const newText= document.createTextNode('Hello World');
newDiv.appendChild(newText);
console.log(newDiv);

//Inner html

const newDiv1 = document.createElement('div');
newDiv1.innerHTML = '<h1>Hello World</h1>';
console.log(newDiv1.innerHTML);

// Attributes

const newDiv2 = document.createElement('div');
newDiv2.setAttribute('class', 'hello');
console.log(newDiv2);


