// Function which changes roll picture according to randomized numbers on dices

export default function changeDicePrint(rollfirstDice, rollsecondDice, dice1, dice2) {

    var one = 'url("../images/dices/dice_one.jpg")';
    var two = 'url("../images/dices/dice_two.jpg")';
    var three = 'url("../images/dices/dice_tree.jpg")';
    var four = 'url("../images/dices/dice_four.jpg")';
    var five = 'url("../images/dices/dice_five.jpg")';
    var six = 'url("../images/dices/dice_six.jpg")';

    if (rollfirstDice === 1 || rollsecondDice === 1) {
        rollfirstDice === 1 ? dice1.style.backgroundImage = one : dice2.style.backgroundImage = one
    } if (rollfirstDice === 2 || rollsecondDice === 2) {
        rollfirstDice === 2 ? dice1.style.backgroundImage = two : dice2.style.backgroundImage = two
    } if (rollfirstDice === 3 || rollsecondDice === 3) {
        rollfirstDice === 3 ? dice1.style.backgroundImage = three : dice2.style.backgroundImage = three
    } if (rollfirstDice === 4 || rollsecondDice === 4) {
        rollfirstDice === 4 ? dice1.style.backgroundImage = four : dice2.style.backgroundImage = four
    } if (rollfirstDice === 5 || rollsecondDice === 5) {
        rollfirstDice === 5 ? dice1.style.backgroundImage = five : dice2.style.backgroundImage = five
    } if (rollfirstDice === 6 || rollsecondDice === 6) {
        rollfirstDice === 6 ? dice1.style.backgroundImage = six : dice2.style.backgroundImage = six
    }
 }
