    
    
setTimeout(() => {


    if (firstPlayerPosition > 100) {
    firstPlayerPosition = 100 - (firstPlayerPosition - 100);
    informationAfterRollContainer.innerHTML = `You bounced from the end of the boar, and now you are on field nr ${firstPlayerPosition}`;

    } else if (firstPlayerPosition === 100) {

    won.style.display = "block";
    informationForWinner.innerHTML = `<span style="color: blue;">FIRST PLAYER</span><br> wins. You finally reached home ,<br> good job.`
}}, 800);





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

