const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
})