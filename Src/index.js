let min = 1;
let max = 6;
let number = Math.floor(Math.random() * max) + min;


let img = document.getElementById("img");

img.src = `Img/dice(${number}).png`;

let btn = document.getElementById("btn");

let i = 0;
let temp = number;

function rollDice() {
    if (i < 10) {
        number = Math.floor(Math.random() * max) + min;
        img.src = `Img/dice(${number}).png`;
        
        if (number !== temp) {
            i++;
            temp = number;
        }
        
        setTimeout(rollDice, 100);
    }
}
btn.onclick = function (){
    i = 0;
    temp = number;
    rollDice();
}

