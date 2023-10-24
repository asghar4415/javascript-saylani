// function foo()
// {
//     console.log("hello world")
// }

// function inputval()
// {
//     var input= document.getElementById("username")
// console.log(input.value)
// // document.write(input.value)
// }

// function getFormValue()
// {
//     var firstname= document.getElementById("firstname")
//     console.log(firstname.value)
//     var lastname= document.getElementById("lastname")
//     console.log(lastname.value)
//     var age= document.getElementById("age")
//     console.log(age.value)

// }

//calculator

function calc()
{
    var num1= document.getElementById("num1")
var num2= document.getElementById("num2")
var opt= document.getElementById("operator")

    if(opt.value=="+")
    {
        var result= Number(num1.value) + Number(num2.value)
        console.log(result)
    }
    else if(opt.value=="-")
    {
        var result= Number(num1.value) - Number(num2.value)
        console.log(result)
    }
    else if(opt.value=="*")
    {
        var result= Number(num1.value) * Number(num2.value)
        console.log(result)
    }
    else if(opt.value=="/")
    {
        var result= Number(num1.value) / Number(num2.value)
        console.log(result)
    }
    else if(opt.value=="%")
    {
        var result= Number(num1.value) % Number(num2.value)
        console.log(result)
    }
    else
    {
        console.log("invalid operator")
    }
}

