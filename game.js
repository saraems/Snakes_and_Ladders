
let firstPlayerPosition = 0;
let secondPlayerPosition = 0;

let previousPositionFirstPlayer = 0;
let previousPositionSecondPlayer = 0;


let snakes  = [{16: 6}, {46: 25}, {49: 11}, {62: 19}, {64: 60}, {74: 53}, {89: 68}, {92: 88}, {95: 75}, {99: 80}];
let ladders = [{2:38}, {7: 14}, {8: 31}, {15:26}, {21: 42}, {28: 84}, {36: 44}, {51: 67}, {71: 91}, {78: 98}, {87: 94}];

let rollfirstDice;
let rollsecondDice;

let playerRolledIsBlocked = false;

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

let whoseTurnSpan = document.querySelector("#whoseTurn");
let whoseTurn = 1;

let moveForward = 0;

let btnRoll= document.querySelector("button.roll");
let nextPlayerBtn = document.querySelector("button.next_player_btn");

let informationAfterRollContainer = document.querySelector(".game__panel_information_after_roll_container");

const firstPlayersPiece = document.querySelector('.firstPlayer');
const secondPlayersPiece = document.querySelector('.secondPlayer');


const diceRoll = function () {
    return Math.floor(Math.random() * (6 - 1) + 1);
};


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




function movePlayersPiece(piece, playersPosition,previousPosition) {

    let fieldToMoveOn = smallDivsTab[playersPosition - 1];
    fieldToMoveOn.appendChild(piece);

    if (smallDivsTab[previousPosition].firstElementChild) {

        smallDivsTab[previousPosition].firstElementChild.remove();

    }
}

nextPlayerBtn.addEventListener("click", function (e) {



    if (whoseTurn === 1 && playerRolledIsBlocked === true) {

         btnRoll.style.backgroundColor = "blue";
         whoseTurnSpan.style.color = "blue";
         whoseTurnSpan.innerText = "FIRST PLAYER's";
         nextPlayerBtn.style.backgroundColor = "blue";

        informationAfterRollContainer.innerHTML = ``;
        dice1.style.backgroundImage = "none";
        dice2.style.backgroundImage = "none";


        nextPlayerBtn.style.backgroundColor = "deeppink";

        playerRolledIsBlocked = false;
        moveForward = 0;

     } else if (whoseTurn === 2 && playerRolledIsBlocked === true) {

         btnRoll.style.backgroundColor = "deeppink";
         whoseTurnSpan.style.color = "deeppink";
         whoseTurnSpan.innerText = "SECOND PLAYER's";

        informationAfterRollContainer.innerHTML = ``;
        dice1.style.backgroundImage = "none";
        dice2.style.backgroundImage = "none";

        nextPlayerBtn.style.backgroundColor = "blue";

        playerRolledIsBlocked = false;
        moveForward = 0;
     }
});




btnRoll.addEventListener("click", function() {

   if (whoseTurn === 1 && playerRolledIsBlocked === false) {


       rollfirstDice = diceRoll();
       rollsecondDice = diceRoll();


       console.log(rollfirstDice + "first");
       console.log(rollsecondDice + "first");

       moveForward = moveForward + rollfirstDice + rollsecondDice;

       previousPositionFirstPlayer = firstPlayerPosition;
       firstPlayerPosition += (rollfirstDice + rollsecondDice);



       changeDicePrint(rollfirstDice, rollsecondDice);


       if (rollfirstDice === rollsecondDice) {


           informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward} </span></p>Oh, you got two times <span class="move_forward">${rollfirstDice}</span>, congtats! Roll your dice once more then.`;

           whoseTurn = 1;
           playerRolledIsBlocked = false;

       } else {


           informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward}</span></p>You are moving <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${firstPlayerPosition}</span>.`;
           movePlayersPiece(firstPlayersPiece, firstPlayerPosition, previousPositionFirstPlayer);

           whoseTurn = 2;
           playerRolledIsBlocked = true;


       }

   } else if (whoseTurn === 2 && playerRolledIsBlocked === false) {


       rollfirstDice = diceRoll();
       rollsecondDice = diceRoll();

       console.log(rollfirstDice + "second");
       console.log(rollsecondDice + "second");

       moveForward += (rollfirstDice + rollsecondDice);

       previousPositionSecondPlayer = secondPlayerPosition;
       secondPlayerPosition += (rollfirstDice + rollsecondDice);



       changeDicePrint(rollfirstDice, rollsecondDice);


       if (rollfirstDice === rollsecondDice) {

           informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward} </span></p>Oh, you got two times <span class="move_forward">${rollfirstDice}</span>, congtats! Roll your dice once more then.`;

           whoseTurn = 2;
           playerRolledIsBlocked = false;


       } else {

           informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward}</span></p>You are moving <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${secondPlayerPosition}</span>.`;
           movePlayersPiece(secondPlayersPiece, secondPlayerPosition, previousPositionSecondPlayer);

           whoseTurn = 1;
           playerRolledIsBlocked = true;

       }
   }
});





let gameBoard = document.querySelector("div.game_board__board_field");



let bigDivTabb = [];

for(let i = 0; i < 10; i++) {

    let bigDiv = document.createElement("div");

    bigDiv.style.height = 48 + "px";
    bigDiv.style.width = 480 + "px";

    bigDiv.style.display = "flex";
    bigDiv.id = 10 - i;

    if (i % 2 !== 0) {

        bigDiv.className = "odd";
        bigDiv.style.flexDirection = "row";

    } else {

        bigDiv.className = "even";
        bigDiv.style.flexDirection = "row-reverse";

    }

    gameBoard.appendChild(bigDiv);
    bigDivTabb.push(bigDiv)

}


bigDivTabb.reverse();
let smallDivsIdsCounter = 0;
let smallDivsTab = [];

for (let i = 0; i < bigDivTabb.length; i++) {


    for(let j = 0; j < 10; j++) {

        let smallDiv = document.createElement("div");

        smallDiv.style.height = 48 + "px";
        smallDiv.style.width = 48 + "px";

        smallDiv.style.display = "flex";
        smallDiv.style.justifyContent = "center";
        smallDiv.style.alignItems = "center";

        smallDivsIdsCounter += 1;
        smallDiv.id = smallDivsIdsCounter;

        bigDivTabb[i].appendChild(smallDiv);
        smallDivsTab.push(smallDiv)
    }
}

// Marking snake-fields and adding field on which player should move after stepping on it


for(let i = 0; i < smallDivsTab.length ; i++) {

    for (let key in snakes[i]) {

        let k = snakes[i];
        smallDivsTab[key -1].dataset.snake = k[key];
         }
}


// Marking ladder-fields and adding field on which player should move after stepping on it


for(let i = 0; i < smallDivsTab.length ; i++) {

    for (let key in ladders[i]) {

        let k = ladders[i];
        smallDivsTab[key -1].dataset.lader = k[key];
    }
}


// function f() {
//
//     if (smallDivsTab[firstPlayerPosition].dataset.snake) {
//         informationAfterRollContainer.innerHTML = `You stepped on a field with a lader. Go up on field nr ${smallDivsTab[firstPlayerPosition].dataset.snake} and leave everyone behind.`
//
//     }
}












