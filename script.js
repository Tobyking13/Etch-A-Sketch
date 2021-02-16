const gridContainer = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".grid-btn");
const resetGridBtn = document.querySelector(".reset-grid-btn");
const forestBtn = document.querySelector(".forest-color-btn");
const colorButtons = document.querySelectorAll(".color-choice");

const colorsetFire = ["#ffbf00", "#ffa500", "#ff8000", "#ff4000", "#ff1500"];
const colorsetWater = ["#daf8e4", "#97ebdb", "#00c2c7", "#0086ad", "#005582"];
const colorsetForest = ["#c8ffb2", "#bdffc8", "#b6ffaf", "#458563", "#86a97b"];
// const colorsetDesert = [];
let color = "black";

console.log(colorsetForest[1]);

const gridBox = () => {
  let getGridSize = prompt("Grid size? (number must between 4 & 64)");
  if (getGridSize >= 4 && getGridSize <= 64) {
    console.log(getGridSize);
    const loopMax = getGridSize * getGridSize;
    const gridPx = 800 / getGridSize;
    console.log(loopMax);
    gridContainer.style.cssText = `grid-template-rows: repeat(${getGridSize},${gridPx}px)`;
    gridContainer.style.cssText = `grid-template-columns: repeat(${getGridSize},${gridPx}px)`;
    for (let i = 0; i < loopMax; i++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("gridBox", "grid-item");
      gridContainer.appendChild(gridBox);
    }
  } else {
    return gridBox();
  }
  let gridPixels = gridContainer.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", colorGrid)
  );
};

function colorGrid() {
  switch (color) {
    case "fire":
      this.style.backgroundColor = `${
        colorsetFire[Math.floor(Math.random() * 4)]
      }`;
      break;
    case "water":
      this.style.backgroundColor = `${
        colorsetWater[Math.floor(Math.random() * 4)]
      }`;
      break;
    case "forest":
      this.style.backgroundColor = `${
        colorsetForest[Math.floor(Math.random() * 4)]
      }`;
      this.classList.remove("forest");
      break;
    case "black":
      this.style.backgroundColor = "#000000";
      break;
    default:
      this.style.backgroundColor = color;
      break;
  }
}

// Updates color variable when a color button is clicked
function changeColor(event) {
  switch (event.target.dataset.color) {
    case "fire":
      color = "fire";
      break;
    case "water":
      color = "water";
      break;
    case "forest":
      color = "forest";
      break;
    default:
      color = "black";
      break;
  }
}

const resetGrid = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

gridBtn.addEventListener("click", () => {
  resetGrid();
  gridBox();
});

resetGridBtn.addEventListener("click", () => {
  resetGrid();
  gridBox();
});

colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("click", changeColor)
);
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("mouseover", buttonHover)
);
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("mouseout", buttonStandard)
);
