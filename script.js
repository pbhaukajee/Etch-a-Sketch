const container = document.querySelector("#container");
let content;
let grid;
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
