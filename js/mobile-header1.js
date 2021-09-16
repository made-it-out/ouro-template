let mobileHeader1 = document.querySelector('.mobile-header1');
let mobileHeader1Searchbar = mobileHeader1.querySelector('.mobile-header1__searchbar');
let mobileHeader1SearchInput = mobileHeader1Searchbar.querySelector('input');
let mobileHeader1SearchIcon = mobileHeader1Searchbar.querySelector('.search-icon');
let fullscreenMenuM = document.querySelector('.fullscreen-menu')
let mobileHeader1FullscreenMenuOpenBtn = mobileHeader1.querySelector('.mobile-header1__fullscreen-menu-open-btn');


mobileHeader1SearchIcon.addEventListener('click', () => {
    mobileHeader1SearchInput.focus();
})
mobileHeader1SearchInput.addEventListener('focus', () => {
    mobileHeader1Searchbar.classList.add('border');
})
mobileHeader1SearchInput.addEventListener('blur', () => {
    mobileHeader1Searchbar.classList.remove('border');
})
mobileHeader1FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuM.classList.add('open');
    document.body.classList.add('modal-open');
})