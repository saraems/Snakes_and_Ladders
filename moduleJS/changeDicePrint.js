// Function which changes roll picture according to randomized numbers on dices

export default function changeDicePrint(rollfirstDice, rollsecondDice, dice1, dice2) {

    var one = 'url("../images/dices/dice_one.jpg")';
    var two = 'url("../images/dices/dice_two.jpg")';
    var three = 'url("../images/dices/dice_tree.jpg")';
    var four = 'url("../images/dices/dice_four.jpg")';
    var five = 'url("../images/dices/dice_five.jpg")';
    var six = 'url("../images/dices/dice_six.jpg")';

    if (rollfirstDice === 1) {
        dice1.style.backgroundImage = one
    } else if (rollfirstDice === 2) {
        dice1.style.backgroundImage = two
    } else if (rollfirstDice === 3) {
        dice1.style.backgroundImage = three
    } else if (rollfirstDice === 4) {
        dice1.style.backgroundImage = four
    } else if (rollfirstDice === 5) {
        dice1.style.backgroundImage = five
    } else if (rollfirstDice === 6) {
        dice1.style.backgroundImage = six
    }

    if (rollsecondDice === 1) {
        dice2.style.backgroundImage = one
    } else if (rollsecondDice === 2) {
        dice2.style.backgroundImage = two
    } else if (rollsecondDice === 3) {
        dice2.style.backgroundImage = three
    } else if (rollsecondDice === 4) {
        dice2.style.backgroundImage = four
    } else if (rollsecondDice === 5) {
        dice2.style.backgroundImage = five
    } else if (rollsecondDice === 6) {
        dice2.style.backgroundImage = six
    }
 }
