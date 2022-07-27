const DEFAULT_GRID_SIZE = 16;
const grid = document.querySelector("#grid");
let canvasSize = grid.width;
let currentColor = "rgb(60,60,60)"

updateGrid(DEFAULT_GRID_SIZE);
initGUI();

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
        item.style.width = canvasSize / gridSize;

        setCorners(item, i, gridSize);

        item.addEventListener("mousedown", (event) => {
            event.target.style.backgroundColor = currentColor;
        })
        item.addEventListener("mouseover", (event) => {
            if (event.buttons == 1)
                event.target.style.backgroundColor = currentColor;
        });
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
    let toggleDraw = document.querySelector("#toggle-draw-erase");

    //colorPicker.addEventListener("input", (event) => console.log(event));
    slider.addEventListener("input", (event) => sliderText.innerHTML = event.target.value + " x " + event.target.value);
    slider.addEventListener("change", (event) => updateGrid(event.target.value));
    //toggleDraw.addEventListener("click", (event) => event.target.innerText = "frog");
}

