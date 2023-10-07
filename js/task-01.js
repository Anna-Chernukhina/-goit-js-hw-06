
const items = document.querySelectorAll('.item');
const itemsCount = items.length;
console.log(`Number of categories: ${itemsCount}`);

items.forEach(item => {
    const categoryName = (item.querySelector('h2').textContent);
    const subCategoryCount = item.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${subCategoryCount}`);
});

