
           let end=false;

           let btns=document.getElementsByClassName('btn');

         for(let i=0;i<btns.length;i++){
             btns[i].addEventListener('click',printtext);
         }

          // btns.addEventListener('click',printtext)
           let count=0;

           
           function printtext(e){
            let winner;
               
            if(end==false){ 

               if(e.currentTarget.textContent.includes("X")||e.currentTarget.textContent.includes("O")){
                   alert("Already Selected Button ,please choose another")
                   return;
               }
              
             
               if(count%2==0){

                   e.currentTarget.textContent="X";
                   winner="X";
                }
                else{
                    e.currentTarget.textContent="O";
                    winner="O";
            }
        
            
            
               count++;


               //main function of winning

               //storing the text contexts of all buttons in their respective variablle
               let btn1=document.getElementById("btn1");
               let btn1text=btn1.textContent;
               let btn2=document.getElementById("btn2")
               let btn2text=btn2.textContent;
               let btn3=document.getElementById("btn3")
               let btn3text=btn3.textContent;
               let btn4=document.getElementById("btn4")
               let btn4text=btn4.textContent;
               let btn5=document.getElementById("btn5")
               let btn5text=btn5.textContent;
               let btn6=document.getElementById("btn6")
               let btn6text=btn6.textContent;
               let btn7=document.getElementById("btn7")
               let btn7text=btn7.textContent;
               let btn8=document.getElementById("btn8")
               let btn8text=btn8.textContent;
               let btn9=document.getElementById("btn9")
               let btn9text=btn9.textContent;


               function win(){
                setTimeout(()=>{
                    alert("Winner is "+winner+" ,Now press the reset button and start a new game")
                   end=true;
                },200);
               }

               if(btn1text==btn2text&&btn1text==btn3text&&btn1text!=""){
                  win();
                  btn1.style.backgroundColor="blue";
                  btn2.style.backgroundColor="blue";
                  btn3.style.backgroundColor="blue";
                  
                   return;
               }
               if(btn4text==btn5text&&btn4text==btn6text&&btn4text!=""){
                win();
                btn4.style.backgroundColor="blue";
                btn5.style.backgroundColor="blue";
                btn6.style.backgroundColor="blue";
                   return;
               }
               if(btn7text==btn8text&&btn7text==btn9text&&btn7text!=""){
                win();
                btn7.style.backgroundColor="blue";
                btn8.style.backgroundColor="blue";
                btn9.style.backgroundColor="blue";
                   return;
               }
               if(btn1text==btn5text&&btn1text==btn9text&&btn1text!=""){
                win();
                btn1.style.backgroundColor="blue";
                btn5.style.backgroundColor="blue";
                btn9.style.backgroundColor="blue";
                   return;
               }
               if(btn3text==btn5text&&btn3text==btn7text&&btn3text!=""){
                win();
                btn3.style.backgroundColor="blue";
                btn5.style.backgroundColor="blue";
                btn7.style.backgroundColor="blue";
                   return;
               }
               if(btn1text==btn4text&&btn1text==btn7text&&btn1text!=""){
                win();
                btn1.style.backgroundColor="blue";
                btn4.style.backgroundColor="blue";
                btn7.style.backgroundColor="blue";
                   return;
               }
               if(btn2text==btn5text&&btn2text==btn8text&&btn2text!=""){
                win();
                btn2.style.backgroundColor="blue";
                btn5.style.backgroundColor="blue";
                btn8.style.backgroundColor="blue";
                   return;
               }
               if(btn3text==btn6text&&btn3text==btn9text&&btn3text!=""){
                win();
                btn3.style.backgroundColor="blue";
                btn6.style.backgroundColor="blue";
                btn9.style.backgroundColor="blue";
                   return;
               }}
               

              //condition for draw
              let selected=false;        //selected means all selected
               for(let i=0;i<9;i++){
                   if(btns[i].textContent.includes("O")||btns[i].textContent.includes("X"))
                   selected=true;
                   else{
                   selected=false;
                   break;
                   }
                   
               }
               if(selected==true){
               
                    setTimeout(()=>{
                   alert("Game Draw,press reset and play again");},200)
                   return;
               }


                }
        


        
           let resetbtn=document.getElementById("reset");
           resetbtn.addEventListener('click',resetfunc);
           function resetfunc(e){
              // console.log("reset function")
               for(let j=0;j<9;j++){
                   btns[j].textContent="";
                   btns[j].style.backgroundColor="white";
                   end=false;
               }
           }