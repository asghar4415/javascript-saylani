//window object is supported by all browsers. It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object. Even the document object (of the HTML DOM) is a property of the window object: window.document. window.alert(5 + 6) will display an alert box with the result 11. window.document.getElementById("header") will return the element with id="header".

//window funtions 


//window.location.href is the current page's URL (location)

function aboutpage() {
    window.location.href = "about.html";
    window.location.asssign("about.html");

    // window.location.replace("about.html");
    // replace the current page with the new page
    // no history of the previous page

    window.location.reload();

    //window.location.host is the domain name of the web host. write this on the console to see the result 
    //window.location.pathname returns the path and filename of the current page 
    //window.location.protocol returns the web protocol used (http: or https:)
    //window.location.assign() loads a new document
    //window.location.replace() replaces the current document with a new one 
    //window.location.reload() reloads the current page

    //window.history.back() loads the previous page in the history list
    //window.history.forward() loads the next page in the history list
    //window.history.go() loads a specific page from the history list
    //window.history.length returns the number of URLs in the history list
    
    //window.navigator.appName returns the name of the browser
    //window.navigator.appCodeName returns the code name of the browser
    //window.navigator.platform returns the platform of the browser

    //window.open() opens a new browser window
    //window.close() closes the current window
    //window.moveTo() moves the current window
    //window.resizeTo() resizes the current window

    

}

// function homepage() {
//     window.location.href = "index.html";
//     window.location.asssign("index.html");

// }



