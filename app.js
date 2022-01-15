const container = document.querySelector(".container");
const clearButton = document.querySelector("button");
const screen = document.createElement("div");
screen.classList.add("screen");
container.appendChild(screen);
let screenArea = 3;

function createScreen(area) {
  screen.setAttribute(
    "style",
    `grid-template-columns: repeat(${area}, 1fr);  grid-template-rows: repeat(${area}, 1fr)`
  );

  for (i = 0; i < area * area; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    screen.appendChild(content);
  }
  const pixels = document.querySelectorAll(".content");
  draw(pixels);
}
createScreen(screenArea);

const pixels = document.querySelectorAll(".content");
function draw(elemName) {
  elemName.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("drawing");
    });
  });
}
draw(pixels);

clearButton.addEventListener("click", () => {
  clearButton.classList.add("clicked"),
    clearScreen(),
    getGridArea(),
    createScreen(screenArea);
});

clearButton.addEventListener("transitionend", () => {
  clearButton.classList.remove("clicked");
});

function clearScreen() {
  pixels.forEach((pixel) => {
    pixel.classList.remove("drawing");
  });
  while (screen.hasChildNodes()) {
    screen.removeChild(screen.lastChild);
  }
}

function getGridArea() {
  do {
    screenArea = parseInt(
      prompt("Enter any number of squares but less than 100:"),
      10
    );
  } while (isNaN(screenArea) || screenArea > 100 || screenArea < 1);
}
