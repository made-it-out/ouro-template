let modal = document.querySelector('.modal');
let modalAfter = modal.querySelector('.modal__after');
let modalCloseBtn = modal.querySelector('.modal__close-btn');

// Close modal
modalAfter.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
})
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
})
// Make modal appear after 5 seconds
setTimeout(() => {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
}, 5000)



