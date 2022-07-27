const grid = document.querySelector("#grid");
const absSize = 512;
let gridSize = 16;
let currentColor = "black";

grid.style.width = absSize + "px";
grid.style.height = absSize + "px";
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let i = 0; i < gridSize * gridSize; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-square")
    item.ondragstart = () => false;
    item.style.width = absSize / gridSize;
    
    switch (i) {
        case 0:
            item.style.borderStyle = "none dashed dashed none";
            break;
        case gridSize - 1:
            item.style.borderStyle = "none none dashed dashed";
            break;
        case gridSize * (gridSize - 1):
            item.style.borderStyle = "dashed dashed none none";
            break;
        case gridSize * gridSize - 1:
            item.style.borderStyle = "dashed none none dashed";
            break;
    } 

    item.addEventListener("mousedown", (event) => {
        event.target.style.backgroundColor = currentColor;
    })
    item.addEventListener("mouseover", (event) => {
        if(event.buttons == 1)
            event.target.style.backgroundColor = currentColor;
    });
    grid.appendChild(item);
}

