let Btn = document.querySelector("#changeColorBtn");
let topColor = document.querySelector("#topColor");
let bottomColor = document.querySelector("#bottomColor");
let prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
let a;
let b;
function AtLeastOneTimeCall() {
        for (var i = 0; i < prefixes.length; i++) {
            document.body.style.background = prefixes[i] + `linear-gradient(${a = LastFunction()}, ${b = LastFunction()})`;
            topColor.textContent = a;
             bottomColor.textContent = b;
    }
}
//this function is used for atleat one time color will be loaded
AtLeastOneTimeCall();

//this function will give random number every time such that it will give rgba valu
function RanCreation()
{
let ran = Math.trunc(Math.random() * 1000);
while (ran > 255)
{
    ran = Math.trunc(ran / 2);
    }
return ran;
}
///this function  covert rgb to hex value using obtain from RanCreation()
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// this function give evertime new hex value

function LastFunction()
{
    return `${rgbToHex(RanCreation(), RanCreation(), RanCreation())}`;
}

Btn.addEventListener('click', function () {
    // document.body.style.background ="red"
    // document.body.style.backgroundColor = 'rgb(' + RanCreation() + ',' + RanCreation() + ',' + RanCreation() + ')';
    // document.body.style.backgroundColor = `${rgbToHex(RanCreation(), RanCreation(), RanCreation())}`;
    // console.log("manish");

    for (var i = 0; i < prefixes.length; i++) {
        document.body.style.background = prefixes[i] + `linear-gradient(${a=LastFunction()}, ${b=LastFunction()})`;
        topColor.textContent = a;
        bottomColor.textContent = b;
       
    }   
})

// console.log(a);
// console.log(b);




