const container = document.querySelector("#container");
let content;
let grid;
let size;

// do {
//   size = prompt("size (1 to 100): ");
// } while (size < 0 || size > 100);

for (let i = 0; i < size; i++) {
  content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);
  for (let j = 0; j < size; j++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    content.appendChild(grid);
    grid.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
  }
}
