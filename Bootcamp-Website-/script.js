var menuBtn=document.getElementById("menuBtn");
var sideNav=document.getElementById("sideNav");
var darkBtn = document.getElementById("darkBtn")
sideNav.style.right="-250px";
menuBtn.onclick=function(){
    if(sideNav.style.right=="-250px"){
        sideNav.style.right="0";
    }
    else{
        sideNav.style.right="-250px";
    }
}
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
});

let isDark = false;

// Click function for the dark mode button
darkBtn.onclick = function(){
    if(isDark == false){ // if we are in the dark mode
        isDark = true;
        
        document.querySelectorAll("*")[0].style.backgroundColor = "#696969" // change the background color of all the elements 
        darkBtn.innerText = "Light Mode"
        changeTagColor("p" , "#FFF5EE")
        changeTagColor("h1" , "#f67c92")
        changeTagColor("h2" , "#FFF5EE")
        changeTagColor("small" , "#FFF5EE")
        changeTagColor("h4" , "#FA8072")
        changeTagColor("button" , "#FFF5EE")
    }else { // if we are in the light mode
        isDark = false;
        darkBtn.innerText = "Dark Mode"
        document.querySelectorAll("*")[0].style.backgroundColor = "transparent"
        changeTagColor("p" , "#777")
        changeTagColor("h1" , "#000000")
        changeTagColor("h2" , "#000000")
        changeTagColor("h4" , "#f67c92")
        changeTagColor("button" , "#000000")
        changeTagColor("small" , "#000000")
    }
}

// Chnage the color of a tag
function changeTagColor(tag , color){
    let allTags = document.querySelectorAll(`${tag}`);
    allTags.forEach((tag) => tag.style.color = `${color}`)
}


