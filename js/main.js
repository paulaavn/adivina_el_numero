function getRandomNumber(max) {
    const number = Math.ceil(Math.random() * 100);
    return number;
    }
    console.log(getRandomNumber());

    const inputResult = document.querySelector(".js-inputNumber");
    const button = document.querySelector(".js-button");
    const clueBox = document.querySelector(".js-clue");
    const triedBox = document.querySelector(".js-tried");
 
     function selectNumber(){
        const choosenNumber = inputResult.value
        console.log(choosenNumber)
    }

    

    
    function changeClue(){
    const clueText = clueBox.innerHTML;
    let numberSelected = inputResult.value;
   
    if (number < numberSelected){
        clueText = 'Demasiado bajo';
    }
    else if (getRandomNumber() > numberSelected){
        clueText = 'Demasiado bajo';
    }
    else if (getRandomNumber() === numberSelected){
        clueText= 'Has ganado campeona';
    }
    else if (numberSelected < 1){
        clueText = 'El número debe estar entre 1 y 100';
    }
    else if (numberSelected > 100){
        clueText= 'El número debe estar entre 1 y 100';
    }
}

    button.addEventListener('click', selectNumber)


let counter = 0;


button.onclick = function countNumberOfTries(){
    counter ++;
    triedBox.innerHTML = 'Número de intentos: ' + counter
}



console.log(counter)
