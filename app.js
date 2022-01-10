const container = document.querySelector(".container");
const gridRow = 16;
const gridColumn = 16;

for (i = 0; i < gridColumn * gridRow; i++) {
  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);
}

const pixels = document.querySelectorAll(".content");
pixels.forEach((pixel) =>
  pixel.addEventListener("mouseover", () => {
    pixel.classList.add("drawing");
  })
);
