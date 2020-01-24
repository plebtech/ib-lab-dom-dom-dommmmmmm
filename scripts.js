document.addEventListener("DOMContentLoaded", onLoad());

function onLoad() {
    makeAddSquareButton();
}

function makeAddSquareButton() {
    let addSquareButton = document.createElement('button');
    let addSquareButtonText = document.createTextNode("Add Square");
    addSquareButton.appendChild(addSquareButtonText);
    document.body.appendChild(addSquareButton);
}