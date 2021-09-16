let mobileHeader5 = document.querySelector('.mobile-header5')
let mobileHeader5Searchbar = document.querySelector('.mobile-header5__searchbar');
let mobileHeader5SearchInput = mobileHeader5Searchbar.querySelector('input');
let mobileHeader5SearchIcon = mobileHeader5.querySelector('.search-icon');
let mobileHeader5SearchClose = document.querySelector('.mobile-header5__search-close');

let fullscreenMenuM = document.querySelector('.fullscreen-menu')
let mobileHeader5FullscreenMenuOpenBtn = mobileHeader5.querySelector('.mobile-header5__fullscreen-menu-open-btn');


mobileHeader5SearchIcon.addEventListener('click', () => {
    mobileHeader5Searchbar.classList.add('open')
    mobileHeader5SearchInput.focus();
})
mobileHeader5SearchClose.addEventListener('click', () => {
    mobileHeader5Searchbar.classList.remove('open')
    mobileHeader5SearchInput.blur();
})
mobileHeader5SearchInput.addEventListener('focus', () => {
    mobileHeader5Searchbar.classList.add('border');
})
mobileHeader5SearchInput.addEventListener('blur', () => {
    mobileHeader5Searchbar.classList.remove('border');
})
mobileHeader5FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuM.classList.add('open');
    document.body.classList.add('modal-open');
})