// listener for DOM content loaded.
// browser fully loads HTML, then script executes.
document.addEventListener('DOMContentLoaded', onLoad());

// function called by DOMContentLoaded listener.
function onLoad() {
    // makeAlertDiv();
    makeAddSquareButton();
    makeFlexContainer();
}

// makes button, adds listener to it.
function makeAddSquareButton() {
    let addSquareButton = document.createElement('button');
    let addSquareButtonText = document.createTextNode("Add Square");
    addSquareButton.appendChild(addSquareButtonText);
    document.body.appendChild(addSquareButton);
    listenAddSquare(addSquareButton);
}

// makes flex container for black boxes.
function makeFlexContainer() {
    let flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');
    document.body.appendChild(flexContainer);
}

// makes black boxes.
function listenAddSquare(btn) {
    let blackBoxCounter = 0;
    btn.addEventListener('click', function () {
        let divBlackSquare = document.createElement('div');
        divBlackSquare.classList.add('black-square');
        blackBoxCounter = updateCounter();
        divBlackSquare.id = blackBoxCounter;
        document.querySelector('.flex-container').appendChild(divBlackSquare);
        listenSquare(divBlackSquare);
    });
}

// update the counter for number of boxes (boxes existent ON button click).
function updateCounter() {
    let boxes = document.querySelectorAll('.black-square');
    let count = 0;
    boxes.forEach(function (box) {
        count++;
    })
    return count;
}

// random color function.
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'grey'];
function randomColor(e) {
    return colors[Math.floor(Math.random() * colors.length)];
}

// collection of all listeners for the black squares.
function listenSquare(square) {
    square.addEventListener('mouseover', function () {
        let id = document.createTextNode(square.id);
        square.textContent = square.id;
    });
    square.addEventListener('mouseout', function () {
        square.textContent = '';
    });
    square.addEventListener('click', function () {
        square.style.backgroundColor = randomColor();
    });
    square.addEventListener('dblclick', function () {
        doubleClickedSquare(square);
    });
}

// complex logic for double click.
function doubleClickedSquare(square) {
    if ((square.id % 2) === 0) {
        if (square.nextSibling === null) {
            alert("The box is even, yet no box exists to its right.");
        } else {
            square.nextSibling.remove();
        }
    } else if ((square.id % 2) !== 0) {
        if (square.previousSibling === null) {
            alert("The box is odd, yet no box exists to its left.");
        } else {
            square.previousSibling.remove();
        }
    }
}