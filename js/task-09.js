function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button");
const span = document.querySelector("span");
const body = document.querySelector("body");

btn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  span.textContent = newColor;
  body.style.backgroundColor = newColor;
})