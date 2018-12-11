
let firstPlayerPosition = 0;
let secondPlayerPosition = 0;

let fieldMapContainer  = [];

let snakes  = [61, 46, 49, 62, 64, 74, 89, 92, 95, 99];
let ladders = [ 2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87];


// snake field nr : makes you go on field nr
// 16 : 6
// 46 : 25
// 49 : 11
// 62 : 19
// 64 : 60
// 74 :53
// 89 : 68
// 92 : 88
// 95 : 75
// 99 : 80

// 61 46 49 62 64 74 89 92 95 99


// ladder field : go on field nr
//
// 2 : 38
// 7 : 14
// 8 : 31
// 15 : 26
// 21 : 42
// 28 : 84
// 36 : 44
// 51 : 67
// 71 : 91
// 78 : 98
// 87 : 94

// 2 7 8 15 21 28 36 51 71 78 87


let rollfirstDice;
let rollsecondDice;

let playerRolledIsBlocked = false;

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

let whoseTurnSpan = document.querySelector("#whoseTurn");
let whoseTurn = 1;

let moveForward;

let btnRoll= document.querySelector("button.roll");
let nextPlayerBtn = document.querySelector("button.next_player_btn");

let informationAfterRollContainer = document.querySelector(".game__panel_information_after_roll_container");


const diceRoll = function () {
    return Math.floor(Math.random() * (6 - 1) + 1);
};





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

        whoseTurn = 2;
        playerRolledIsBlocked = false;

     } else if (whoseTurn === 2 && playerRolledIsBlocked === true) {

         btnRoll.style.backgroundColor = "deeppink";
         whoseTurnSpan.style.color = "deeppink";
         whoseTurnSpan.innerText = "SECOND PLAYER's";

        informationAfterRollContainer.innerHTML = ``;
        dice1.style.backgroundImage = "none";
        dice2.style.backgroundImage = "none";

        nextPlayerBtn.style.backgroundColor = "blue";

        whoseTurn = 1;
        playerRolledIsBlocked = false;
     }
});




btnRoll.addEventListener("click", function() {

   if (whoseTurn === 1 && playerRolledIsBlocked === false) {


       rollfirstDice = diceRoll();
       rollsecondDice = diceRoll();

       console.log(rollfirstDice + "first");
       console.log(rollsecondDice + "first");

       moveForward = rollfirstDice + rollsecondDice;


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

       firstPlayerPosition += moveForward;

       informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward} </span></p><br>You are moving <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${firstPlayerPosition}</span>.`;


       moveForward = 0;
       whoseTurn = 2;

       playerRolledIsBlocked = true;

   } else if (whoseTurn === 2 && playerRolledIsBlocked === false) {


       rollfirstDice = diceRoll();
       rollsecondDice = diceRoll();

       console.log(rollfirstDice + "second");
       console.log(rollsecondDice + "second");

       moveForward = rollfirstDice + rollsecondDice;


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

       secondPlayerPosition += moveForward;

       informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${moveForward}</span></p><br>You are moving <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${secondPlayerPosition}</span>.`;


       moveForward = 0;
       whoseTurn = 1;

       playerRolledIsBlocked = true;

   }
});


const firstPlayersPiece = document.querySelector('.firstPlayer');
const secondPlayersPiece = document.querySelector('.secondPlayer');


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

for (let i = 0; i < bigDivTabb.length; i++) {


    for(let j = 0; j < 10; j++) {

        let smallDiv = document.createElement("div");

        smallDiv.style.height = 48 + "px";
        smallDiv.style.width = 48 + "px";

        smallDivsIdsCounter += 1;
        smallDiv.id = smallDivsIdsCounter;

        bigDivTabb[i].appendChild(smallDiv)
    }


}








