// Get all in case there are multiple
let accordionItems = Array.from(document.querySelectorAll('.accordion__item'));

accordionItems.forEach(item => {
    let openBtns = item.querySelectorAll('.accordion__open-btn')
    let closeBtns = item.querySelectorAll('.accordion__close-btn')
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            item.classList.toggle('open');
        })
    })
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            item.classList.toggle('open');
        })
    })
})