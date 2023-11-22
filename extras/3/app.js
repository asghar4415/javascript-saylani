//tables in DOM

const tabletag= document.body.children[0]
console.log(tabletag)

console.log(tabletag.tBodies[0].rows[0].cells)
console.log(tabletag.tBodies[0].rows[0].cells[0].textContent)

// tBodies is a collection of all the tbody tags in the table
// rows is a collection of all the tr tags in the tbody
// cells is a collection of all the td tags in the tr

//changing style in table

tabletag.tBodies[0].rows[0].cells[0].style.backgroundColor="red"
tabletag.tBodies[0].rows[0].cells[0].style.color="white"


