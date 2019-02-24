
import createGameBoard from "./createGameBoard.js"

var firstPlayerPosition = 0;
var secondPlayerPosition = 0;

var previousPositionFirstPlayer = 0;
var previousPositionSecondPlayer = 0;

var firstPlayersNameInput = document.querySelector("#first_players_name");
var secondPlayersNameInput = document.querySelector("#second_players_name");

var firstPlayersName;
var secondPlayersName;


var firstPlayersColor = document.querySelector("#first_players_color");
var secondPlayersColor = document.querySelector("#second_players_color");

var gameBoard = document.querySelector("div.game_board__board_field");

var snakes  = [{16: 6}, {46: 25}, {49: 11}, {62: 19}, {64: 60}, {74: 53}, {89: 68}, {92: 88}, {95: 75}, {99: 80}];
var ladders = [{2: 38}, {7: 14}, {8: 31}, {15:26}, {21: 42}, {28: 84}, {36: 44}, {51: 67}, {71: 91}, {78: 98}, {87: 94}];

var boardRowsArray = [];
var cellsCounter = 0;
var cellsArray = [];


var rollfirstDice;
var rollsecondDice;

var playerRolledIsBlocked = false;

var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");

var whoseTurnSpan = document.querySelector("#whoseTurn");
var whoseTurn = 1;

var moveForward = 0;

var btnRoll= document.querySelector("button.roll");
var nextPlayerBtn = document.querySelector("button.next_player_btn");

var informationAfterRollContainer = document.querySelector(".game__panel_information_after_roll_container");

var firstPlayersPiece = document.querySelector('.firstPlayer');
var secondPlayersPiece = document.querySelector('.secondPlayer');

var checkTheRules = document.querySelector(".check_rules");
var rules =document.querySelector(".rules");
var closeCross = document.querySelector(".close_cross");

var playGameBtn = document.querySelector("button#play_the_game");
var welcomeDialog = document.querySelector("div#welcome");

var won = document.querySelector("div#won");
var informationForWinner = document.querySelector("div.information_container p");
var playAgain = document.querySelector("button#play_again");

var submit = document.querySelector(".submit");
var input = document.querySelector(".players_info");


// Function which gets a random integer number, between 1 and 6 (as after dice roll)

var diceRoll = function () {
    return Math.floor(Math.random() * (6 - 1) + 1);
};

createGameBoard();

for(var i = 0; i < 10; i++) {

    var boardRow = document.createElement("div");

    boardRow.id = 10 - i;
    boardRow.classList.add('boardRow');

    if (i % 2 !== 0) {
        boardRow.classList.add('odd')
    } else {
        boardRow.classList.add('even')
    }

    boardRowsArray.push(boardRow);
    gameBoard.appendChild(boardRow)
}


boardRowsArray.reverse();

// creating single cells in each row


for (var i = 0; i < boardRowsArray.length; i++) {

    for(var j = 0; j < 10; j++) {

        cellsCounter += 1;

        var cell = document.createElement("div");

        cell.classList.add('cell');
        cell.id = cellsCounter;

        cellsArray.push(cell);
        boardRowsArray[i].appendChild(cell)
    }
}

// marking snake-fields


for(var i = 0; i < cellsArray.length ; i++) {

    for (var key in snakes[i]) {

        var k = snakes[i];
        cellsArray[key].dataset.snake = k[key];
    }
}


// marking ladder-fields

for(var i = 0; i < cellsArray.length ; i++) {

    for (var key in ladders[i]) {

        var k = ladders[i];
        cellsArray[key].dataset.lader = k[key];
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

    var fieldToMoveOn = cellsArray[playersPosition - 1];
    fieldToMoveOn.appendChild(piece);

    if (cellsArray[previousPosition].firstElementChild) {

        cellsArray[previousPosition].firstElementChild.remove();

    }
}

// Next Player, switch players and unblock roll button for next player

nextPlayerBtn.addEventListener("click", function (e) {

    setTimeout( function() {

        if (whoseTurn === 1 && playerRolledIsBlocked === true) {

            btnRoll.style.backgroundColor = `${firstPlayersColor}`;
            whoseTurnSpan.style.color = `${firstPlayersColor}`;
            whoseTurnSpan.innerText = `${firstPlayersName}'s`;
            nextPlayerBtn.style.backgroundColor = `${firstPlayersColor}`;

            informationAfterRollContainer.innerHTML = ``;
            dice1.style.backgroundImage = "none";
            dice2.style.backgroundImage = "none";


            nextPlayerBtn.style.backgroundColor = `${secondPlayersColor}`;

            playerRolledIsBlocked = false;
            moveForward = 0;

        } else if (whoseTurn === 2 && playerRolledIsBlocked === true) {

            btnRoll.style.backgroundColor = `${secondPlayersColor}`;
            whoseTurnSpan.style.color = `${secondPlayersColor}`;
            whoseTurnSpan.innerText = `${secondPlayersName}'s`;

            informationAfterRollContainer.innerHTML = ``;
            dice1.style.backgroundImage = "none";
            dice2.style.backgroundImage = "none";

            nextPlayerBtn.style.backgroundColor = `${firstPlayersColor}`;

            playerRolledIsBlocked = false;
            moveForward = 0;
        }

    }, 400)
});


// Main algorithm of the game, called on click in "Roll dices" button



btnRoll.addEventListener("click", function() {

    var randomRollTimer = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    // Randomized number of seconds when roll animation last



   if (whoseTurn === 1 && playerRolledIsBlocked === false) {


       var rollAnimation =  setInterval ( function() {

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
               informationForWinner.innerHTML = `<span style="color: ${firstPlayersColor};">${firstPlayersName}</span><br> wins. You finally reached home ,<br> good job.`
               firstPlayerPosition = 100;

           }}, 1000);




       // Condition checking if player stepped onto field with ladder, snake or plain one, and then
       // secondly check if player rolled the same numbers, if so player should repeat dice roll




       setTimeout(() => {


           if (cellsArray[firstPlayerPosition].dataset.lader) {

               firstPlayerPosition = parseInt(cellsArray[firstPlayerPosition].dataset.lader);


               if (rollsecondDice === rollfirstDice) {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br></p> Wow, you rolled two times ${rollfirstDice}, stepped on the ladder field and moved on field nr ${firstPlayerPosition}, now roll your dices once more.`;

                   whoseTurn = 1;
                   playerRolledIsBlocked = false;

               } else {

                   informationAfterRollContainer.innerHTML = `<p> = <span class="move_forward">${rollsecondDice+rollfirstDice}</span><br><br> On your way you stepped on a field with the ladder and you moved up on field nr ${firstPlayerPosition}</span>.`;

                   whoseTurn = 2;
                   playerRolledIsBlocked = true;

               }

           } else  if (cellsArray[firstPlayerPosition].dataset.snake) {

               informationAfterRollContainer.innerHTML = `You stepped on a field nr with a snake. Go down on a field nr ${cellsArray[firstPlayerPosition].dataset.snake}.`;
               firstPlayerPosition = parseInt(cellsArray[firstPlayerPosition].dataset.snake);


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



       var rollAnimation =  setInterval ( function() {

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
               won.style.display = "block";
               informationForWinner.innerHTML = `<span style="color: ${firstPlayersColor};">${firstPlayersName}</span><br> wins. You finally reached home ,<br> good job.`
               firstPlayerPosition = 100;

           }}, 1000);



       setTimeout(() => {


           if (cellsArray[secondPlayerPosition].dataset.lader) {

               secondPlayerPosition = parseInt(cellsArray[secondPlayerPosition].dataset.lader);

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

           } else if (cellsArray[secondPlayerPosition].dataset.snake) {

               informationAfterRollContainer.innerHTML = `You stepped on a field with snake. Go down on a field nr ${cellsArray[secondPlayerPosition].dataset.snake}.`;
               secondPlayerPosition = parseInt(cellsArray[secondPlayerPosition].dataset.snake);

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
    console.log('clicked play');

});

playAgain.addEventListener("click", function () {

    window.location.reload()

});

checkTheRules.addEventListener("click", function () {

    rules.style.top = '0';

});

closeCross.addEventListener("click", function () {

    rules.style.top = `-70vh`;

});

var error = document.querySelector(".error");


submit.addEventListener("click", function (e) {

    e.preventDefault();
    var isValid = false;

    // firstPlayersName = firstPlayersName.value;


    if (!secondPlayersNameInput.value || !firstPlayersNameInput.value) {

        error.innerHTML = `Please, insert proper Player's name`;

    } else if (secondPlayersNameInput.value && firstPlayersNameInput.value) {

        secondPlayersName = secondPlayersNameInput.value;
        firstPlayersName = firstPlayersNameInput.value;

        isValid = true;
    }



    if (isValid) {

        input.style.display = "none";

        firstPlayersColor = firstPlayersColor.value;
        secondPlayersColor = secondPlayersColor.value;

        whoseTurnSpan.style.color = `${firstPlayersColor}`;
        whoseTurnSpan.innerText = `${firstPlayersName}'s`;

        nextPlayerBtn.style.backgroundColor = `${secondPlayersColor}`;
        btnRoll.style.backgroundColor = `${firstPlayersColor}`;

        firstPlayersPiece.style.backgroundColor = `${firstPlayersColor}`;
        secondPlayersPiece.style.backgroundColor = `${secondPlayersColor}`;

        console.log(firstPlayersName, secondPlayersName,  firstPlayersColor, secondPlayersColor);

    }

});













