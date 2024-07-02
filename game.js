const boxes=document.querySelectorAll(".box");
const resetbtn=document.querySelector("#btn");
const restart=document.querySelector("#btn2");
const msg=document.querySelector("#msg");
const msgbox=document.querySelector(".msgcontainer");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
let disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
let enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let resetgame=()=>{
    turnO=true;
    enableboxes();
    msgbox.classList.add("hide");   
 }

let showwinner=(winner)=>{
    msg.innerText=`congratulations!!winner is ${winner}`;
    msgbox.classList.remove("hide");
    disableboxes();
}
let checkwinner=function(){
    for(pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val==pos2val&& pos2val==pos3val){
               showwinner(pos1val);
            
            }
        }
    }
}
resetbtn.addEventListener("click",resetgame);
restart.addEventListener("click",resetgame);