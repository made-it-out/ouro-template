document.addEventListener('DOMContentLoaded', init)
document.addEventListener('shopify:section:load', init)

function init() {
    const textFields = Array.from(document.querySelectorAll('.text-field'));

    textFields.forEach(field => {
        const input = field.querySelector('.text-field__input');
        const label = field.querySelector('.text-field__label');

        input.addEventListener('focus', () => {
            label.classList.add('text-field__label--up')
        })
        input.addEventListener('blur', () => {
            input.value.length > 0 ? label.classList.add('text-field__label--up') : label.classList.remove('text-field__label--up')
        })
        label.addEventListener('click', () => {
            input.focus();
        })
    })
}