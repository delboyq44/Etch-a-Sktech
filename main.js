 let color = "black";
 
 document.addEventListener("DOMContentLoaded", () => {
    makeRows(16);
 })
const makeRows = (size) => {
    let grid = document.querySelector('.container');

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let rowsTimesColumns = size * size;

    for (let i = 0; i < rowsTimesColumns; i++) {
        let divItem = document.createElement('div');
        divItem.addEventListener('mouseover', divColor)
        divItem.classList.add('grid-item')
        grid.insertAdjacentElement('beforeend', divItem);
    }
}

function checkSize() {
    let userPrompt = prompt("Enter a number between (2-100): ");
    let message = document.querySelector("#msg");
    if (userPrompt === "") {
        message.innerHTML = "Enter a value!";
    } else if (userPrompt < 2 || userPrompt > 100) {
        message.innerHTML = "Enter a number between (2-100)!";
    } else {
        message.innerHTMl = "Play Time!";
        return userPrompt;
    }
}

let selectButton = document.querySelector('#select');
selectButton.addEventListener('click', () => {
    let size = checkSize();
    makeRows(size)
})

function divColor() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black";
    }

}

function setColor(colorChoice) {
    color = colorChoice
}

const reset = () => {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white");
}




