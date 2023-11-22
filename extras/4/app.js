//get element by id

var para= document.getElementById("element")
console.log(para.children[0].textContent)
para.children[0].textContent="I am a paragraph"
para.children[0].style.color="white"
para.children[0].style.backgroundColor="blue"
para.children[0].style.padding="20px"

//get element by class name

var para= document.getElementsByClassName("element1")
console.log(para[0].textContent)
para[0].textContent="I am a paragraph"
para[0].style.color="white"
para[0].style.backgroundColor="green"
para[0].style.padding="20px"

//get element by tag name

var para= document.getElementsByTagName("div")
console.log(para[2].textContent)
para[2].textContent="I am a paragraph"
para[2].style.color="white"
para[2].style.backgroundColor="red"
para[2].style.padding="20px"

//query selector

var queryselec= document.querySelector(".element3")
console.log(queryselec.children)

//query selector all

var queryselec= document.querySelectorAll("div")
console.log(queryselec)

// query selector is used to select the first element of the class or id
// query selector all is used to select all the elements of the class or id

// the difference between getElementById and querySelector is that getElementById is used to select the element by id and querySelector is used to select the element by class or id



