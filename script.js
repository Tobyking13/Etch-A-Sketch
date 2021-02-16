const gridContainer = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".grid-btn");
const resetGridBtn = document.querySelector(".reset-grid-btn");

const gridBox = () => {
  let getGridSize = prompt("Grid size? (number must between 4 & 64)");
  if (getGridSize >= 4 && getGridSize <= 64) {
    console.log(getGridSize);
    const loopMax = getGridSize * getGridSize;
    const gridPx = 480 / getGridSize;
    console.log(loopMax);
    gridContainer.style.cssText = `grid-template-rows: repeat(${getGridSize},${gridPx}px)`;
    gridContainer.style.cssText = `grid-template-columns: repeat(${getGridSize},${gridPx}px)`;
    for (let i = 0; i < loopMax; i++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("gridBox", "grid-item");
      gridContainer.appendChild(gridBox);
      gridBox.addEventListener("mouseover", (e) => {
        if (e.type === "mouseover") {
          gridBox.classList.add("colorset-1");
        }
      });
    }
  } else {
    return gridBox();
  }
};

const resetGrid = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

gridBtn.addEventListener("click", (e) => {
  resetGrid();
  gridBox();
});

resetGridBtn.addEventListener("click", (e) => {
  resetGrid();
});
