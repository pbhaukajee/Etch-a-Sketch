// const container = document.querySelector("#container");
// const size = document.querySelector(".size");
// const black = document.querySelector(".black");
// const random = document.querySelector(".random");
// const erase = document.querySelector(".erase");
// const reset = document.querySelector(".reset");

// let content;
// let grid;

// //Create grids

// for (let i = 0; i < 16; i++) {
//   content = document.createElement("div");
//   content.classList.add("content");
//   container.appendChild(content);
//   for (let j = 0; j < 16; j++) {
//     grid = document.createElement("div");
//     grid.classList.add("grid");
//     content.appendChild(grid);
//     grid.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "black";
//     });
//   }
// }

// //Ask for size and create grid per size
// size.addEventListener("click", () => {
//   s = prompt("Input size (1 to 100): ");
//   while (s <= 0 || s > 100) {
//     s = prompt("Input correct size (1 to 100): ");
//   }
// });

// //make it black
// function makeBlack() {
//   black.addEventListener("click", () => {
//     grid.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "black";
//     });
//   });
// }

// //erase
// function eraser() {
//   erase.addEventListener("click", () => {
//     grid.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "white";
//     });
//   });
// }

// //reset
// function resetAll() {
//   reset.addEventListener("click", () => {});
// }

const gridSize = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;

function createGrid() {
  for (let i = 0; i < rows * cols; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${gridSize / cols - 2}px`;
    gridCell.style.height = `${gridSize / rows - 2}px`;

    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);
  }
}

createGrid();
