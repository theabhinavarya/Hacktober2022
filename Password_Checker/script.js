let email= document.querySelector("#email");
let pass = document.querySelector("#pass");
let capital = document.querySelector("#capital");
let small = document.querySelector("#small");
let number = document.querySelector("#number");
let specialSymbol = document.querySelector("#specialSymbol");
let length = document.querySelector("#length");
let check = document.querySelector("#check");


let Bool_capital;
let Bool_small;
let Bool_number;
let Bool_specialSymbol;
let Bool_length;
let arr = [];
let var1;
let str = "";
let green = "#38E54D";

// const KeyPress = () => {
//     // arr = arr + event.key;
//     checkLetter();
// }

pass.addEventListener("keydown", function (event) {
            const key = event.key;
    str = pass.value;
    console.log(str);
            if (key === "Backspace" || key === "Delete") {
            length.style.background = "white";
            length.style.color = "black";
            capital.style.background = "white";
            capital.style.color = "black";
            small.style.background = "white";
            small.style.color = "black";
            number.style.background = "white";
            number.style.color = "black";
            specialSymbol.style.background = "white";
                specialSymbol.style.color = "black";
                Bool_length = false;
                Bool_capital = false;
                Bool_small = false;
                Bool_number = false;
                Bool_specialSymbol = false;
            }
        })



    const keyDown = () => {
        str = pass.value;
        console.log(str);
    for (let i = 0; i < str.length; i++) {
        var1 = str.codePointAt(i);
        if (str.length == 8) {
            length.style.background = green;
            length.style.color = "white";
            Bool_length = true;
        
        }
        if (var1 >= 65 && var1 <= 90) {
            capital.style.background = green;
            capital.style.color = "white";
            Bool_capital = true;
        }
        else if (var1 >= 97 && var1 <= 122) {
            small.style.background = green;
            small.style.color = "white";
           Bool_small = true;
        }
        else if (var1 >= 48 && var1 <= 57) {
            number.style.background = "#9CFF2E";
            number.style.color = "white";
            Bool_number = true;


        }
        else {
            specialSymbol.style.background = green;
            specialSymbol.style.color = "white";
            Bool_specialSymbol = true;

        }
    }    
}


check.addEventListener('click', function () {
    // console.log("manish");
    if (Bool_capital == true && Bool_small == true && Bool_number == true && Bool_length == true && Bool_specialSymbol==true)
    {
        alert("yes this is correct ");
        console.log("yes is correct");
    }
    else {
        console.log("no is correct");
    }
})



// //firstly we create an array and find thier ascii value and set accodingly that
// a = "manish";
// console.log(a.charCodeAt(0));