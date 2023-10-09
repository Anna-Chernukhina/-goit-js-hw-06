function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes")
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

console.log(input.value);

createBtn.addEventListener('click', () => { createCollection(input.value) });
destroyBtn.addEventListener('click', destroyCollection);

function createCollection(count) {
  const boxesArr = [];
  let size = 30;

  for (let i = 0; i < count; i+=1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + "px";
    div.style.height = size + "px";
    size += 10;
    boxesArr.push(div);
  }

  divBoxes.append(...boxesArr);
  // console.log(boxesArr);
}

function destroyCollection() {
  divBoxes.innerHTML = "";
}