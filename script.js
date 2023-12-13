const container = document.querySelector("#container");
const size = document.querySelector(".size");
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const erase = document.querySelector(".erase");
const reset = document.querySelector(".reset");

let content;
let grid;

//Create grids
for (let i = 0; i < 16; i++) {
  content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);
  for (let j = 0; j < 16; j++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    content.appendChild(grid);
    grid.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
  }
}

//Ask for size and create grid per size
size.addEventListener("click", () => {
  s = prompt("Input size (1 to 100): ");
  if (s <= 0 || s > 100) {
    s = prompt("Input correct size (1 to 100): ");
  }
});
