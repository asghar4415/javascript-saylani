// Functions in JS
//these functions are called by html file


function focusmode(elem)
{
    elem.style.border="1px solid blue";

}
function blurmode(elem)
{
    if(elem.value.length < 3 )
    {
        elem.style.border="1px solid red";
    }
    else
    {
        elem.style.border="1px solid green";
    }
    
}
function submit()
{
    var username= document.getElementById("username");
    var helpertext= document.getElementById("helpertext");

    if(username.value.length >= 3)
    {
        helpertext.innerHTML = "successfully submitted";
        helpertext.style.color="green";
    }
    else if(username.value.length < 3)
    {
        if(username.value.length == 0 )
        {
            helpertext.innerHTML = "Required field is empty";
            helpertext.style.color="red";
        }
        else
        {
            helpertext.innerHTML = "please enter atleast 3 characters";
            helpertext.style.color="red";
        }
        
    }
   
}

function PressEvent(elem)
{
    console.log("value: ", elem.value);

    if(elem.value.length >=3 )
    {
        elem.style.border="1px solid red";
        elem.style.color="red";
    }
}

