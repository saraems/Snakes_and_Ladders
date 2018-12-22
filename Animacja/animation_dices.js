
let btnRoll= document.querySelector("button.roll");

let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");

let rollfirstDice;
let rollsecondDice;

let moveForward;

const diceRoll = function () {
    return Math.floor(Math.random() * (6 - 1) + 1);
};

btnRoll.addEventListener("click", function() {



        let rollAnimation =  setInterval ( function() {

            rollfirstDice = diceRoll();
            rollsecondDice = diceRoll();

            changeDicePrint(rollfirstDice, rollsecondDice);


        }, 100);

        setTimeout(() => { clearInterval(rollAnimation);

            console.log(rollfirstDice + "first");
            console.log(rollsecondDice + "first");

            moveForward = moveForward + rollfirstDice + rollsecondDice;

        }, 700);

});



function changeDicePrint(rollfirstDice, rollsecondDice) {

    if (rollfirstDice === 1) {
        dice1.style.backgroundImage = "url('dices/dice_one.jpg')"
    } else if (rollfirstDice === 2) {
        dice1.style.backgroundImage = "url('dices/dice_two.jpg')"
    } else if (rollfirstDice === 3) {
        dice1.style.backgroundImage = "url('dices/dice_tree.jpg')"
    } else if (rollfirstDice === 4) {
        dice1.style.backgroundImage = "url('dices/dice_four.jpg')"
    } else if (rollfirstDice === 5) {
        dice1.style.backgroundImage = "url('dices/dice_five.jpg')"
    } else if (rollfirstDice === 6) {
        dice1.style.backgroundImage = "url('dices/dice_six.jpg')"
    }

    if (rollsecondDice === 1) {
        dice2.style.backgroundImage = "url('dices/dice_one.jpg')"
    } else if (rollsecondDice === 2) {
        dice2.style.backgroundImage = "url('dices/dice_two.jpg')"
    } else if (rollsecondDice === 3) {
        dice2.style.backgroundImage = "url('dices/dice_tree.jpg')"
    } else if (rollsecondDice === 4) {
        dice2.style.backgroundImage = "url('dices/dice_four.jpg')"
    } else if (rollsecondDice === 5) {
        dice2.style.backgroundImage = "url('dices/dice_five.jpg')"
    } else if (rollsecondDice === 6) {
        dice2.style.backgroundImage = "url('dices/dice_six.jpg')"
    }
}







