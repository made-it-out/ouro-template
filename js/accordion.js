// Get all in case there are multiple
let accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach(accordion => {
    let accordionOpenBtns = accordion.querySelectorAll('.accordion__open-btn')
    let accordionCloseBtns = accordion.querySelectorAll('.accordion__close-btn')
    accordionOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
        })
    })
    accordionCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
        })
    })
})