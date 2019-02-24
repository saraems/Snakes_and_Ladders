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



