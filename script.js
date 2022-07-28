const DEFAULT_GRID_SIZE = 16;
const grid = document.querySelector("#grid");
let canvasSize = grid.width;
let currentColor = "rgb(60,60,60)"
let drawMode = true;

updateGrid(DEFAULT_GRID_SIZE);
initGUI();

function draw(event) {
    if (event.buttons == 1) {
        event.target.style.backgroundColor = drawMode ? currentColor : "";
    }
}

function toggleDraw(event) {
    console.log("hello!!!")
    drawMode = !drawMode;
    event.target.innerText = drawMode ? "draw" : "erase";
}

function updateGrid(newSize) {

    grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

    document.querySelectorAll(".grid-square").forEach((elem) => elem.remove());
    createGridSquares(newSize);
}

function createGridSquares(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-square")
        item.ondragstart = () => false;
        item.style.width = canvasSize / gridSize + "px";
        item.style.transition = "background-color 0.2s";

        setCorners(item, i, gridSize);

        item.addEventListener("mousedown", draw);
        item.addEventListener("mouseover", draw);
        grid.appendChild(item);
    }
}

function setCorners(item, i, gridSize) {
    let radius = "16px";
    switch (i) {
        case 0:
            item.style["border-top-left-radius"] = radius;
            break;
        case gridSize - 1:
            item.style["border-top-right-radius"] = radius;
            break;
        case gridSize * (gridSize - 1):
            item.style["border-bottom-left-radius"] = radius;
            break;
        case gridSize * gridSize - 1:
            item.style["border-bottom-right-radius"] = radius;
            break;
    }
}

function initGUI() {
    let colorPicker = document.querySelector("#color-picker");
    let sliderText = document.querySelector("#slider-text");
    let slider = document.querySelector("#size-slider");
    let toggleBtn = document.querySelector("#toggle-draw-erase");

    slider.addEventListener("input", (event) => sliderText.innerHTML = event.target.value + " x " + event.target.value);
    slider.addEventListener("change", (event) => updateGrid(event.target.value));
    colorPicker.addEventListener("input", (event) => currentColor = event.target.value);
    toggleBtn.addEventListener("click", (event) => toggleDraw(event));
}

