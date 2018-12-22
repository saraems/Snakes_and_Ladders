
let firstPlayerPosition = 0;
let secondPlayerPosition = 0;

let previousPositionFirstPlayer = 0;
let previousPositionSecondPlayer = 0;


let snakes  = [{16: 6}, {46: 25}, {49: 11}, {62: 19}, {64: 60}, {74: 53}, {89: 68}, {92: 88}, {95: 75}, {99: 80}];
let ladders = [{2: 38}, {7: 14}, {8: 31}, {15:26}, {21: 42}, {28: 84}, {36: 44}, {51: 67}, {71: 91}, {78: 98}, {87: 94}];

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

let gameBoard = document.querySelector("div.game_board__board_field");

let smallDivsIdsCounter = 0;
let smallDivsTab = [];
let bigDivTabb = [];

let checkTheRules = document.querySelector(".check_rules");
let rules =document.querySelector(".rules");
let closeCross = document.querySelector(".close_cross");

let playGameBtn = document.querySelector("button#play_the_game");
let welcomeDialog = document.querySelector("div#welcome");

let won = document.querySelector("div#won");
let informationForWinner = document.querySelector("div.information_container p");
let playAgain = document.querySelector("button#play_again");

let submit = document.querySelector(".submit");
let input = document.querySelector(".players_info");


// Function which gets a random integer number, between 1 and 6 (as after dice roll)

const diceRoll = function () {
    return Math.floor(Math.random() * (6 - 1) + 1);
};


// Algorithm creating matrix of board fields 10 x 10 for the game
// 10 - rows, with a proper flex-box, properties indicating a field number increase way for children fields

for(let i = 0; i < 10; i++) {

    let bigDiv = document.createElement("div");

    bigDiv.style.height = 10 + "%";
    bigDiv.style.maxWidth = 480 + "px";

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

// Creating columns (single cells) in each of created row


for (let i = 0; i < bigDivTabb.length; i++) {


    for(let j = 0; j < 10; j++) {

        let smallDiv = document.createElement("div");

        smallDiv.style.height = 100 + "%";
        smallDiv.style.width = 10 + "%";

        smallDiv.style.display = "flex";
        smallDiv.style.justifyContent = "center";
        smallDiv.style.alignItems = "center";

        smallDivsIdsCounter += 1;
        smallDiv.id = smallDivsIdsCounter;

        bigDivTabb[i].appendChild(smallDiv);
        smallDivsTab.push(smallDiv)
    }
}

// Marking snake-fields, on array of objects variable "snakes" base,
// div's (cell) dataset contains field's number on which player piece should move, after stepping snake's field


for(let i = 0; i < smallDivsTab.length ; i++) {

    for (let key in snakes[i]) {

        let k = snakes[i];
        smallDivsTab[key].dataset.snake = k[key];
    }
}


// Marking ladder-fields, on array of objects variable "laders" base,
// div's (cell) dataset contains field's number on which player piece should move, after stepping ladder's field


for(let i = 0; i < smallDivsTab.length ; i++) {

    for (let key in ladders[i]) {

        let k = ladders[i];
        smallDivsTab[key].dataset.lader = k[key];
    }
}


// Function which changes roll picture according to randomized numbers on dices

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


// function which moves players piece according to roll score

function movePlayersPiece(piece, playersPosition,previousPosition) {

    let fieldToMoveOn = smallDivsTab[playersPosition - 1];
    fieldToMoveOn.appendChild(piece);

    if (smallDivsTab[previousPosition].firstElementChild) {

        smallDivsTab[previousPosition].firstElementChild.remove();

    }
}

// Next Player, switch players and unblock roll button for next player

nextPlayerBtn.addEventListener("click", function (e) {

    setTimeout( function() {

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

    }, 400)
});


// Main algorithm of the game, called on click in "Roll dices" button



btnRoll.addEventListener("click", function() {

    let randomRollTimer = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    // Randomized number of seconds when roll animation last



   if (whoseTurn === 1 && playerRolledIsBlocked === false) {


       let rollAnimation =  setInterval ( function() {

           rollfirstDice = diceRoll();
           rollsecondDice = diceRoll();

           changeDicePrint(rollfirstDice, rollsecondDice);


       }, 100);

       setTimeout(() => { clearInterval(rollAnimation);

           console.log(rollfirstDice + "first");
           console.log(rollsecondDice + "first");

           previousPositionFirstPlayer = firstPlayerPosition;

           moveForward = moveForward + rollfirstDice + rollsecondDice;
           firstPlayerPosition += (rollfirstDice + rollsecondDice);


       }, randomRollTimer);



       //Condition which checks if player reached field nr 100, if player's score is bigger than 100,
       // piece bounces from the end of the board and moves back as many fields as sum of rolls equals,
       // when score is equal 100, player wins, and dialog window with congrats opens


       setTimeout(() => {


           if (firstPlayerPosition > 100) {
               firstPlayerPosition = 100 - (firstPlayerPosition - 100);
               informationAfterRollContainer.innerHTML = `You bounced from the end of the boar, and now you are on field nr ${firstPlayerPosition}`;

           } else if (firstPlayerPosition === 100) {

               won.style.display = "block";
               informationForWinner.innerHTML = `<span style="color: blue;">FIRST PLAYER</span><br> wins. You finally reached home ,<br> good job.`
           }}, 1000);




       // Condition checking if player stepped onto field with ladder, snake or plain one, and then
       // secondly check if player rolled the same numbers, if so player should repeat dice roll




       setTimeout(() => {


           if (smallDivsTab[firstPlayerPosition].dataset.lader) {

               firstPlayerPosition = parseInt(smallDivsTab[firstPlayerPosition].dataset.lader);


               if (rollsecondDice === rollfirstDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br></p> Wow, you rolled two times ${rollfirstDice}, stepped on the ladder field and moved on field nr ${firstPlayerPosition}, now roll your dices once more.`;

                   whoseTurn = 1;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br><br> On your way you stepped on a field with the ladder and you moved up on field nr ${firstPlayerPosition}</span>.`;

                   whoseTurn = 2;
                   playerRolledIsBlocked = true;

               }

           } else  if (smallDivsTab[firstPlayerPosition].dataset.snake) {

               informationAfterRollContainer.innerHTML = `You stepped on a field nr with a snake. Go down on a field nr ${smallDivsTab[firstPlayerPosition].dataset.snake}.`;
               firstPlayerPosition = parseInt(smallDivsTab[firstPlayerPosition].dataset.snake);


               if (rollsecondDice === rollfirstDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice} </span><br></p> Luck in unluck, you rolled two times ${rollfirstDice}. But on your way you stepped a field with the snake. You are on field nr ${firstPlayerPosition}. Roll once more. `;

                   whoseTurn = 1;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br> Unfortunately, on your way from field nr ${previousPositionFirstPlayer} you stepped on a field with the snake and you moved down on field nr ${firstPlayerPosition}</span>. `;;

                   whoseTurn = 2;
                   playerRolledIsBlocked = true;

               }

           } else {

               if (rollfirstDice === rollsecondDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice} </span><br></p>You got two times <span class="move_forward">${rollfirstDice}</span>.<br><br>Roll your dice once more and leave the other player behind.`;

                   whoseTurn = 1;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br></p>You moved <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${firstPlayerPosition}</span>. <br><br>Your previous position<br> field nr ${previousPositionFirstPlayer}.`;

                   whoseTurn = 2;
                   playerRolledIsBlocked = true;
               }

           }

       }, 1500);


       setTimeout(() => {movePlayersPiece(firstPlayersPiece, firstPlayerPosition, previousPositionFirstPlayer)}, 2800);


   } else if (whoseTurn === 2 && playerRolledIsBlocked === false) {



       let rollAnimation =  setInterval ( function() {

           rollfirstDice = diceRoll();
           rollsecondDice = diceRoll();

           changeDicePrint(rollfirstDice, rollsecondDice);


       }, 100);


       setTimeout(() => {

           clearInterval(rollAnimation);

           console.log(rollfirstDice + "first");
           console.log(rollsecondDice + "first");

           previousPositionSecondPlayer = secondPlayerPosition;

           moveForward = moveForward + rollfirstDice + rollsecondDice;
           secondPlayerPosition += (rollfirstDice + rollsecondDice);


       }, randomRollTimer);




       setTimeout(() => {


           if (secondPlayerPosition > 100) {

               secondPlayerPosition = 100 - (secondPlayerPosition - 100);
               informationAfterRollContainer.innerHTML = `You bounced from the end of the boar, and now you are on field nr ${firstPlayerPosition}`;

           } else if (secondPlayerPosition === 100) {

               won.style.display = "block";
               informationForWinner.innerHTML = `<span style="color:deeppink;">SECOND PLAYER</span><br> wins. You finally reached home,<br> good job! `

           }}, 1000);



       setTimeout(() => {


           if (smallDivsTab[secondPlayerPosition].dataset.lader) {

               secondPlayerPosition = parseInt(smallDivsTab[secondPlayerPosition].dataset.lader);

               movePlayersPiece(secondPlayersPiece, secondPlayerPosition, previousPositionSecondPlayer);

               if (rollsecondDice === rollfirstDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice} </span><br></p> Wow, you rolled two times  ${rollfirstDice}, stepped on the ladder field and moved on field nr ${secondPlayerPosition}, now roll your dices once more.`;

                   whoseTurn = 2;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br> On your way you stepped on a field with the ladder and you moved up on field nr ${secondPlayerPosition}</span>.`;
                   whoseTurn = 1;
                   playerRolledIsBlocked = true;

               }

           } else if (smallDivsTab[secondPlayerPosition].dataset.snake) {

               informationAfterRollContainer.innerHTML = `You stepped on a field with snake. Go down on a field nr ${smallDivsTab[secondPlayerPosition].dataset.snake}.`;
               secondPlayerPosition = parseInt(smallDivsTab[secondPlayerPosition].dataset.snake);

               movePlayersPiece(secondPlayersPiece, secondPlayerPosition, previousPositionSecondPlayer);

               if (rollsecondDice === rollfirstDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice} </span><br></p> Luck in unluck, you rolled two times ${rollfirstDice}. But on your way you stepped a field with the snake. You are on field nr ${secondPlayerPosition}. Roll once more. `;

                   whoseTurn = 2;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br> Unfortunately, on your way from field nr ${previousPositionSecondPlayer} you stepped on a field with the snake and you moved down on field nr ${secondPlayerPosition}</span>. `;

                   whoseTurn = 1;
                   playerRolledIsBlocked = true;

               }

           } else {


               if (rollfirstDice === rollsecondDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice} </span><br></p>You got two times <span class="move_forward">${rollfirstDice}</span>.<br><br>Roll your dice once more and leave the other player behind.`;

                   whoseTurn = 2;
                   playerRolledIsBlocked = false;


               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br></p>You moved <span class="move_forward">${moveForward}</span> fields forward, on field nr <span id="players_position">${secondPlayerPosition}</span>. <br><br>Your previous position<br> field nr ${previousPositionSecondPlayer}.`;

                   whoseTurn = 1;
                   playerRolledIsBlocked = true;
               }
           }

       }, 1000);


       setTimeout(() => {movePlayersPiece(secondPlayersPiece, secondPlayerPosition, previousPositionSecondPlayer)}, 2800);

   }
}
   );




// Actions after pop-ups (dialogue windows) buttons click

playGameBtn.addEventListener("click", function () {

    welcomeDialog.style.display = "none";
    input.style.visibility = "visible";

});

playAgain.addEventListener("click", function () {

    window.location.reload()

});

checkTheRules.addEventListener("click", function () {

    rules.style.top = 0;

});

closeCross.addEventListener("click", function () {

    rules.style.top = `-70vh`;

});

submit.addEventListener("click", function (e) {

    e.preventDefault();
    input.style.display = "none";

});













