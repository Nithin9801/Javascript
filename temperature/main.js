const value = document.getElementById("tempvalue");
const radio1 = document.getElementById("ctof");
const radio2 = document.getElementById("ftoc");
const result = document.getElementById("answer");
let temp;

function Convert(){
    if (radio1.checked){
        temp = Number(value.value);
        temp = temp*9/5+32;
        result.textContent = `Fahrenheit = ${temp.toFixed(1) + "°F"}`;
    }
    else if(radio2.checked){
        temp = Number(value.value);
        temp = (temp-32)*(5/9);
        result.textContent = `Celsius = ${temp.toFixed(1) +"°C"}`;
    }
    else{
        result.textContent = "Please Select a UNIT";
    }
}