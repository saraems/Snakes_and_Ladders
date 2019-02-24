// function which moves players piece according to roll score

export default function movePlayersPiece(piece, playersPosition, previousPosition, cellsArray) {

    var fieldToMoveOn = cellsArray[playersPosition - 1];
    fieldToMoveOn.appendChild(piece);

    if (cellsArray[previousPosition].firstElementChild) {
        cellsArray[previousPosition].firstElementChild.remove();
    }
}

