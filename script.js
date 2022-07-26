const grid = document.querySelector("#grid");
const absSize = 512;
let gridSize = 32;
grid.style.width = absSize + "px";
grid.style.height = absSize + "px";
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
for (let i = 0; i < gridSize * gridSize; i++) {
    let item = document.createElement("div");
    item.style.width = absSize / gridSize;
    item.style.height = absSize / gridSize;
    console.log(item);
    grid.appendChild(item);
}