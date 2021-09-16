let textFields = Array.from(document.querySelectorAll('.text-field'));

textFields.forEach(field => {
    let input = field.querySelector('.text-field__input');
    let label = field.querySelector('.text-field__label');

    if(input.value != ''){
        label.classList.add('up');
    }
    input.addEventListener('input', () => {
        label.classList.add('up');
    })
    input.addEventListener('focus', () => {
        label.classList.add('up');
    })
    input.addEventListener('blur', () => {
        if (input.value.length > 0) {
            label.classList.add('up');
        } else {
            label.classList.remove('up');
        }
    })
})