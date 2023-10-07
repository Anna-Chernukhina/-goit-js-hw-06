let counter = 0;

const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');

decrButton.addEventListener('click', () => {
    counter -= 1;
    span.textContent = counter;
})

incrButton.addEventListener('click', () => {
    counter += 1;
    span.textContent = counter;
})