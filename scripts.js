// listener for DOM content loaded.
// browser fully loads HTML, then script executes.
document.addEventListener('DOMContentLoaded', onLoad());

// function called by DOMContentLoaded listener.
function onLoad() {
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
        divBlackSquare.id = blackBoxCounter;
        blackBoxCounter++;
        document.querySelector('.flex-container').appendChild(divBlackSquare);
        listenSquareHover(divBlackSquare);
    });
}

function listenSquareHover(square) {
    square.addEventListener('mouseover', function() {
        let id = document.createTextNode(square.id);
        square.textContent = square.id;
    });
    square.addEventListener('mouseout', function() {
        square.textContent = '';
    });
}