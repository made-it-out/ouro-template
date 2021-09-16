let mobileHeader4 = document.querySelector('.mobile-header4')
let mobileHeader4Searchbar = document.querySelector('.mobile-header4__searchbar');
let mobileHeader4SearchInput = mobileHeader4Searchbar.querySelector('input');
let mobileHeader4SearchIcon = mobileHeader4.querySelector('.search-icon');
let mobileHeader4SearchClose = document.querySelector('.mobile-header4__search-close');

let fullscreenMenuM = document.querySelector('.fullscreen-menu')
let mobileHeader4FullscreenMenuOpenBtn = mobileHeader4.querySelector('.mobile-header4__fullscreen-menu-open-btn');


mobileHeader4SearchIcon.addEventListener('click', () => {
    mobileHeader4Searchbar.classList.add('open')
    mobileHeader4SearchInput.focus();
})
mobileHeader4SearchClose.addEventListener('click', () => {
    mobileHeader4Searchbar.classList.remove('open')
    mobileHeader4SearchInput.blur();
})
mobileHeader4SearchInput.addEventListener('focus', () => {
    mobileHeader4Searchbar.classList.add('border');
})
mobileHeader4SearchInput.addEventListener('blur', () => {
    mobileHeader4Searchbar.classList.remove('border');
})
mobileHeader4FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuM.classList.add('open');
    document.body.classList.add('modal-open');
})