const canvasSize = 512;
const grid = document.querySelector("#grid");
let gridSize = 16;
let currentColor = "rgb(60,60,60)";

grid.style.width = canvasSize + "px";
grid.style.height = canvasSize + "px";
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let i = 0; i < gridSize * gridSize; i++) {
    let item = document.createElement("div");
    item.classList.add("grid-square")
    item.ondragstart = () => false;
    item.style.width = canvasSize / gridSize;

    setCorners(item, i);

    item.addEventListener("mousedown", (event) => {
        event.target.style.backgroundColor = currentColor;
    })
    item.addEventListener("mouseover", (event) => {
        if (event.buttons == 1)
            event.target.style.backgroundColor = currentColor;
    });
    grid.appendChild(item);
}

function setCorners(item, i) {
    let radius = "16px";
    switch (i) {
        case 0:
            item.style.borderStyle = "none dashed dashed none";
            item.style["border-top-left-radius"] = radius;
            break;
        case gridSize - 1:
            item.style.borderStyle = "none none dashed dashed";
            item.style["border-top-right-radius"] = radius;
            break;
        case gridSize * (gridSize - 1):
            item.style.borderStyle = "dashed dashed none none";
            item.style["border-bottom-left-radius"] = radius;
            break;
        case gridSize * gridSize - 1:
            item.style.borderStyle = "dashed none none dashed";
            item.style["border-bottom-right-radius"] = radius;
            break;
    }
}

