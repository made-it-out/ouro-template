let mobileHeader3 = document.querySelector('.mobile-header3');
let mobileHeader3Searchbar = document.querySelector('.mobile-header3__searchbar');
let mobileHeader3SearchInput = mobileHeader3Searchbar.querySelector('input');
let mobileHeader3SearchIcon = mobileHeader3.querySelector('.search-icon');
let mobileHeader3SearchClose = document.querySelector('.mobile-header3__search-close');

let fullscreenMenuM = document.querySelector('.fullscreen-menu')
let mobileHeader3FullscreenMenuOpenBtn = mobileHeader3.querySelector('.mobile-header3__fullscreen-menu-open-btn');


mobileHeader3SearchIcon.addEventListener('click', () => {
    mobileHeader3Searchbar.classList.add('open')
    mobileHeader3SearchInput.focus();
})
mobileHeader3SearchClose.addEventListener('click', () => {
    mobileHeader3Searchbar.classList.remove('open')
    mobileHeader3SearchInput.blur();
})
mobileHeader3SearchInput.addEventListener('focus', () => {
    mobileHeader3Searchbar.classList.add('border');
})
mobileHeader3SearchInput.addEventListener('blur', () => {
    mobileHeader3Searchbar.classList.remove('border');
})
mobileHeader3FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuM.classList.add('open');
    document.body.classList.add('modal-open');
})