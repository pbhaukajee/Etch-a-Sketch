const containerSize = 600;
let defaultGridSize = 16;
let currentColor = "black";

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${containerSize}px`;

const size = document.querySelector(".size");
size.addEventListener("click", setSize);

const makeBlack = document.querySelector(".makeBlack");
makeBlack.addEventListener("click", () => {
  currentColor = "black";
});

const makeRandom = document.querySelector(".makeRandom");
makeRandom.addEventListener("click", () => {
  currentColor = randomColor();
});

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  currentColor = "erase";
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", renew);

//create new grid
function createGrid(defaultGridSize) {
  const numOfSquare = defaultGridSize * defaultGridSize;
  for (let i = 0; i < numOfSquare; i++) {
    const gridCell = document.createElement("div");

    //the border has 1px each side, therefore 2px is subtracted below
    gridCell.style.width = gridCell.style.height = `${
      containerSize / defaultGridSize - 2
    }px`;

    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", changeColor);
  }
}

//Ask for size and create grid per size

function setSize() {
  let gridSize;
  gridSize = prompt("Input size (1 to 100): ");
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = prompt("Input correct size (1 to 100): ");
  }
  removeAll();
  createGrid(gridSize);
}

//remove everything before reset or setting new size
function removeAll() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

//generate random color
function randomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

//change color
function changeColor() {
  if (currentColor === "black") {
    this.style.backgroundColor = "black";
  } else if (currentColor === "erase") {
    this.style.backgroundColor = "white";
  } else {
    //random color is chosen every time the grid is created
    const random = randomColor();
    this.style.backgroundColor = random;
  }
}

//reset everything
function renew() {
  removeAll();
  createGrid(16);
}

//call the function with default size
createGrid(16);
