'use strict';

const button = document.querySelector(".js-button");
const selectedNumber = document.querySelector(".js-inputNumber");
const clueBox = document.querySelector(".js-clue");
const triedBox = document.querySelector(".js-tried");


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);



let counterClick = 0;
function counter() {
    counterClick++;
    triedBox.innerHTML = `Número de intentos: ${counterClick}`

}


function handleClickButton(event) {
    event.preventDefault();
    const inputNumber = parseInt(selectedNumber.value);

    if (inputNumber < 1 || inputNumber > 100) {
        clueBox.innerHTML = "El número debe estar entre 1 y 100";
    } else if (inputNumber < randomNumber) {
        clueBox.innerHTML = "Pista: Demasiado bajo"
    } else if (inputNumber > randomNumber) {
        clueBox.innerHTML = "Pista: Demasiado alto"
    } else {
        clueBox.innerHTML = "Has ganado campeona!!!"
    };
    counter();

};


button.addEventListener("click", handleClickButton);













