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

    if (getRandomNumber() < selectNumber){
        clueBox.innerHTML = 'Demasiado bajo';
    }
    else if (number > parseInt(selectedNumber)){
        clueBox.innerHTML = 'Demasiado bajo';
    }
    else if (number === parseInt(selectedNumber)){
        clueBox.innerHTML = 'Has ganado campeona';
    }
    else if (parseInt(selectedNumber) < 1){
        clueBox.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (parseInt(selectedNumber) > 100){
        clueBox.innerHTML = 'El número debe estar entre 1 y 100';
    }
}

    button.addEventListener('click', selectNumber)


let counter = 0;


button.onclick = function countNumberOfTries(){
    counter ++;
    triedBox.innerHTML = 'Número de intentos: ' + counter
}



console.log(counter)
