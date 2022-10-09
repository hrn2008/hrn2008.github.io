"use strict";
//IIFE
// (function()
// {

//     function Start()
//     {
//         console.log("App Started!")
//     }
//     window.addEventListener("load", Start);
// })();



// https://www.youtube.com/watch?v=JkuiKeNS2mg
let activePage = window.location.pathname;
// console.log(activePage);
if (activePage == "/") {
    activePage = "/index.html";
    // console.log("sdfdfd-");
    // console.log(activePage);
} else {
    activePage = window.location.pathname;
}
console.log(activePage);


// const spanLinks = document.querySelectorAll('ul li span');

// console.log(`${activePage}`)
// spanLinks.forEach(span=>{

//     if(`${span.id}.html` == (`${activePage}`)){
//         span.classList.add("selectedOption")
//     }
// })


const navlinks = document.querySelectorAll('.nav a').forEach(link => {
    // console.log(link.href);
    if (link.href.includes(`${activePage}`)) {
        // console.log(`${activePage}`);
        link.classList.add('active');
    }
})

