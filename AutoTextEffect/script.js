const text="Hello, I am Anjali Chauhan and this is the auto text effect!!!";
let index=0;
function write(){
    document.body.innerText=text.slice(0,index);
    index++;
    if(index>text.length){
        index=0;
    }
}
setInterval(write,110);