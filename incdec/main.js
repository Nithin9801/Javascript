const restbutton = document.getElementById("resetButton");
const incresebutton = document.getElementById("incButton");
const decresebutton = document.getElementById("decButton");
const counterlabel = document.getElementById("countlabel");

let count = 0;

incresebutton.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

decresebutton.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

restbutton.onclick = function(){
    count = 0;
    counterlabel.textContent = count;
}