document.addEventListener("DOMContentLoaded", onLoad());

function onLoad() {
    makeAddSquareButton();
}

function makeAddSquareButton() {
    let addSquareButton = document.createElement('button');
    let addSquareButtonText = document.createTextNode("Add Square");
    addSquareButton.appendChild(addSquareButtonText);
    document.body.appendChild(addSquareButton);
    makeFlexContainer();
    listenAddSquare(addSquareButton);
}

function makeFlexContainer() {
    let flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');
    document.body.appendChild(flexContainer);
}

function listenAddSquare(btn) {
    btn.addEventListener("click", function () {
        let divBlackSquare = document.createElement('div');
        divBlackSquare.classList.add('black-square');
        document.querySelector('.flex-container').appendChild(divBlackSquare);
    });
}