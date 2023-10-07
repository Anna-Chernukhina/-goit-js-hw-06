const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");

function addList(array) {
  const liList = [];

  array.forEach(elem => {
    // console.log(elem);
    const li = document.createElement("li");
    li.textContent = elem;
    li.classList = "item";
    liList.push(li);
  });

  // добавляем элементы списка в DOM
  list.append(...liList);
}

addList(ingredients);