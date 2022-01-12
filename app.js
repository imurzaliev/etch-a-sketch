const container = document.querySelector(".container");
const clearButton = document.querySelector("button");

clearButton.addEventListener("click", () => {
  clearButton.classList.add("clicked");
});

const screen = document.createElement("div");
screen.classList.add("screen");
container.appendChild(screen);

const gridRow = 16;
const gridColumn = 16;

for (i = 0; i < gridColumn * gridRow; i++) {
  const content = document.createElement("div");
  content.classList.add("content");
  screen.appendChild(content);
}

const pixels = document.querySelectorAll(".content");
pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.classList.add("drawing");
  }),
    clearButton.addEventListener("transitionend", () => {
      clearButton.classList.remove("clicked"), clearScreen(pixel, "drawing");
    });
});

function clearScreen(elem, elemClass) {
  elem.classList.remove(elemClass);
}
