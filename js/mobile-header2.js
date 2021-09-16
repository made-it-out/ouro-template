let mobileHeader2 = document.querySelector('.mobile-header2');
let mobileHeader2Searchbar = document.querySelector('.mobile-header2__searchbar');
let mobileHeader2SearchInput = mobileHeader2Searchbar.querySelector('input');
let mobileHeader2SearchIcon = mobileHeader2Searchbar.querySelector('.search-icon');

let fullscreenMenuM = document.querySelector('.fullscreen-menu')
let mobileHeader2FullscreenMenuOpenBtn = mobileHeader2.querySelector('.mobile-header2__fullscreen-menu-open-btn');


mobileHeader2SearchIcon.addEventListener('click', () => {
    mobileHeader2SearchInput.focus();
})
mobileHeader2SearchInput.addEventListener('focus', () => {
    mobileHeader2Searchbar.classList.add('border');
})
mobileHeader2SearchInput.addEventListener('blur', () => {
    mobileHeader2Searchbar.classList.remove('border');
})
mobileHeader2FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuM.classList.add('open');
    document.body.classList.add('modal-open');
})