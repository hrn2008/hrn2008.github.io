"use strict";
//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!")
    }
    window.addEventListener("load", Start);
})();



// https://www.youtube.com/watch?v=JkuiKeNS2mg
const activePage=window.location.pathname;
// console.log(activePage);
const navlinks=document.querySelectorAll('.nav a').forEach(link => {
    // console.log(link.href);
    if (link.href.includes(`${activePage}`)){
        // console.log(`${activePage}`);
        link.classList.add('active');
    }
})
