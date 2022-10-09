//create  an array
let arr = [, , , , , , , ,];
arr[0]= document.querySelector("#r1c1");
arr[1] = document.querySelector("#r1c2");
arr[2] = document.querySelector("#r1c3"); 
arr[3] = document.querySelector("#r2c1");
arr[4] = document.querySelector("#r2c2");
arr[5] = document.querySelector("#r2c3");
arr[6]= document.querySelector("#r3c1");
arr[7]= document.querySelector("#r3c2");
arr[8] = document.querySelector("#r3c3");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let StartGameBtn = document.querySelector("#StartGameBtn");
let tossWinner = document.querySelector("#tossWinner");
let item = document.querySelector(".item");


function main_check_function() {
    if (arr[0].textContent == imgRed && arr[1].textContent == imgRed && arr[3].textContent == imgRed)
    {map2(imgRed);    }  
    else if (arr[0].textContent == imgGreen && arr[1].textContent == imgGreen && arr[2].textContent == imgGreen)
    { map2(imgGreen); }

    else if (arr[3].textContent == imgRed && arr[4].textContent == imgRed && arr[5].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[3].textContent == imgGreen && arr[4].textContent == imgGreen && arr[5].textContent == imgGreen)
    {  map2(imgGreen);  }
    
    else if (arr[6].textContent == imgRed && arr[7].textContent == imgRed && arr[8].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[6].textContent == imgGreen && arr[7].textContent == imgGreen && arr[8].textContent == imgGreen)
    {  map2(imgGreen);  }

    else if (arr[0].textContent == imgRed && arr[3].textContent == imgRed && arr[6].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[0].textContent == imgGreen && arr[3].textContent == imgGreen && arr[6].textContent == imgGreen)
    {  map2(imgGreen);  }

    else if (arr[1].textContent == imgRed && arr[4].textContent == imgRed && arr[7].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[1].textContent == imgGreen && arr[4].textContent == imgGreen && arr[7].textContent == imgGreen)
    {  map2(imgGreen);  }

    else if (arr[2].textContent == imgRed && arr[5].textContent == imgRed && arr[8].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[2].textContent == imgGreen && arr[5].textContent == imgGreen && arr[8].textContent == imgGreen)
    {  map2(imgGreen);  }

    else if (arr[0].textContent == imgRed && arr[4].textContent == imgRed && arr[8].textContent == imgRed)
    { map2(imgRed); }
    else if (arr[0].textContent == imgGreen && arr[4].textContent == imgGreen && arr[8].textContent == imgGreen)
    {  map2(imgGreen);  }

    else if (arr[2].textContent == imgRed && arr[6].textContent == imgRed && arr.textContent == imgRed)
    { map2(imgRed); }
    else if (arr[2].textContent == imgGreen && arr[6].textContent == imgGreen && arr.textContent == imgGreen)
    { map2(imgGreen); }
    else if (num == 0) { if (ulternate == 9) { alert("game  is draw"); location.reload(); } }
    else { if (ulternate == 10) { alert("game  is draw"); loacation.reload(); } }       
}

//we use innerHtml for show on screen and it is compulsory to intialize var a=document.querySelector("#");
//but in the case of textContent we give or take directly(without document.querySelector(""))
function map2(sample) {
    if (sample == `X`) { alert(`Winner is player ${player1.value}`); }
    else  { alert(`Winner is player ${player2.value}`); } 
    let text = "press a button either ok or cancel  \n\n ok for play again and cancel for exit";
    if (confirm(text) == true)
    {  location.reload(); }
    else {window.close('');}
  }
function WrongClickFun() {
    alert("Wrong click");
}


let imgRed="X";
let imgGreen="O";
let ulternate = (Math.trunc(Math.random() * 10) % 2);
const num = ulternate;
let a = document.getElementById('mytext');
let mybtn = document.getElementById('StartGameBtn');
mybtn.addEventListener('click', function () {
    if (num == 0)
    {
        a.textContent = ` First chance to run ${(player1.value).toUpperCase()}`;
    }
    else {a.textContent = ` First chance to run ${((player2.value)).toUpperCase()}`;} 
})



function Color_change(select)
{
    if (Math.round(ulternate % 2) == 0)
    {
        select.innerHTML = imgRed;
        select.style.backgroundColor = "black";
        select.style.color = "red";
        select.style.fontSize = "90px";
    }
    else{
        select.innerHTML = imgGreen;
        select.style.backgroundColor = "black";
        select.style.color = "green";
        select.style.fontSize = "90px";
    }
    ulternate++;
}


for (let i = 0; i < 9; i++)
{    
    arr[i].addEventListener('click', function ()
    {
        if (arr[i].textContent=="Click")
        {   Color_change(arr[i]);   setTimeout(()=>{ main_check_function();})  }
        else { WrongClickFun(); }
    })
}
