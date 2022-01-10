const container = document.querySelector(".container");
const gridRow = 16;
const gridColumn = 16;

for (i = 0; i < gridColumn * gridRow; i++) {
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = i + 1;
  container.appendChild(content);
}
