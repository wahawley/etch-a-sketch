let bodySelector = document.querySelector("body");
let buttonContainer = document.createElement("div");
let button = document.createElement("button");
let grid = document.createElement("div");
let row = document.createElement("div");
let square = document.createElement("div");

grid.classList.add("grid");
square.classList.add("square");
row.classList.add("row");

let oldSquares = 16;
let newSquares;

function eas() {

    bodySelector.appendChild(grid);

    for (let i=0;i<16;i++) {
        row.appendChild(square.cloneNode(true));
    }

    for (let i=0;i<16;i++) {
        grid.appendChild(row.cloneNode(true));
    }

    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        grid.style.backgroundColor = "";
    });
    grid.addEventListener("mouseout", (event) => {event.target.style.backgroundColor = "";});

    gridButton();

}

function gridButton() {
    
    button.textContent = "Change Grid Size";
    buttonContainer.classList.add("container");
    buttonContainer.appendChild(button);
    bodySelector.insertBefore(buttonContainer, grid);

    button.onclick = function() {
        let newNumber = prompt("Please enter number of squares per side: ", 16);
        while (newNumber>100) {
            newNumber = prompt("Number of squares per side cannot be greater than 100.  Please enter number of squares per side: ", 16);
        }
        newSquares=newNumber;
        generateNewEas();
    }

}

function generateNewEas() {

    row.innerHTML = "";
    grid.innerHTML = "";

    for (let i=0;i<newSquares;i++) {
        row.appendChild(square.cloneNode(true));
    }

    for (let i=0;i<newSquares;i++) {
        grid.appendChild(row.cloneNode(true));
    }

    oldSquares = newSquares;

    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        grid.style.backgroundColor = "";
    });

    grid.addEventListener("mouseout", (event) => {event.target.style.backgroundColor = "";});

}

eas();
