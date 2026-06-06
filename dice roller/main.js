

function rolldice() {
    const value = document.getElementById("dicevalue").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i=0;i<value;i++){
        const val = Math.floor(Math.random()*6)+1;
        values.push(val);
        images.push(`<img src="images/dice${val}.png" alt="${val}">`);
    }

    diceresult.textContent = `DICE: ${values.join(',')}`;
    diceimages.innerHTML = images.join('');
}