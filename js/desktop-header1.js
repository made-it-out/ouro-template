let desktopHeader1 = document.querySelector('.desktop-header1');
let desktopHeader1Logo = desktopHeader1.querySelector('.desktop-header1__logo-container');
let desktopHeader1Searchbar = desktopHeader1.querySelector('.desktop-header1__searchbar');
let desktopHeader1SearchInput = desktopHeader1Searchbar.querySelector('input');
let desktopHeader1SearchIcon = desktopHeader1Searchbar.querySelector('.search-icon');
let desktopHeader1Links = desktopHeader1.querySelector('.desktop-header1__links')
let desktopHeader1SearchAndIcons = desktopHeader1.querySelector('.desktop-header1__search-and-icons');
let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader1FullscreenMenuOpenBtn = desktopHeader1.querySelector('.desktop-header1__fullscreen-menu-open-btn');

// Searchbar
desktopHeader1Searchbar.addEventListener('mouseover', () => {
    desktopHeader1Searchbar.classList.add('border');
})
desktopHeader1Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader1SearchInput.classList.contains('focused')) {
        desktopHeader1Searchbar.classList.add('border');
    }
    else {
        desktopHeader1Searchbar.classList.remove('border');
    }

})
desktopHeader1SearchIcon.addEventListener('click', () => {
    desktopHeader1SearchInput.focus();
})
desktopHeader1SearchInput.addEventListener('focus', () => {
    desktopHeader1Searchbar.classList.add('border');
    desktopHeader1SearchInput.classList.add('focused');
})
desktopHeader1SearchInput.addEventListener('blur', () => {
    desktopHeader1Searchbar.classList.remove('border');
    desktopHeader1SearchInput.classList.remove('focused');
})
let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If screen is loaded while desktop header is dispalyed
if (window.getComputedStyle(desktopHeader1).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader1Links).getPropertyValue('width'))

    // If links are too wide, collapse to hamburger
    if (desktopHeader1SearchAndIcons.getBoundingClientRect().left - desktopHeader1Logo.getBoundingClientRect().right <= (linksWidth + fontSize * 2)) {
        desktopHeader1.classList.add('collapsed');
        desktopHeader1.classList.remove('together');
        desktopHeader1Links.classList.remove('show');
    }
    // Ideal layout
    else if ((window.innerWidth / 2 + linksWidth / 2) <= (desktopHeader1SearchAndIcons.getBoundingClientRect().left)) {
        desktopHeader1Links.style.marginRight = '0'
        desktopHeader1.classList.remove('together');
        desktopHeader1.classList.remove('collapsed');
        desktopHeader1Links.classList.remove('show');
    }
    // Move links over so they dont collide with searchbar
    else {
        desktopHeader1.classList.add('together');
        desktopHeader1.classList.remove('collapsed');
        desktopHeader1Links.classList.remove('show');
        desktopHeader1Links.style.marginRight = `${(window.innerWidth - desktopHeader1SearchAndIcons.getBoundingClientRect().left)}px`
    }
}

// Same as above but when viewport width changes
window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader1Links.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader1Links).getPropertyValue('width'));
    }
    if (desktopHeader1SearchAndIcons.getBoundingClientRect().left - desktopHeader1Logo.getBoundingClientRect().right <= (linksWidth + fontSize * 2)) {
        desktopHeader1.classList.add('collapsed');
        desktopHeader1.classList.remove('together');
        desktopHeader1Links.classList.remove('show');
    }
    else if ((window.innerWidth / 2 + linksWidth / 2) <= (desktopHeader1SearchAndIcons.getBoundingClientRect().left)) {
        desktopHeader1Links.style.marginRight = '0'
        desktopHeader1.classList.remove('collapsed');
        desktopHeader1.classList.remove('together');
        desktopHeader1Links.classList.remove('show');
    }
    else {
        desktopHeader1.classList.add('together');
        desktopHeader1.classList.remove('collapsed');
        desktopHeader1Links.classList.remove('show');
        desktopHeader1Links.style.marginRight = `${(window.innerWidth - desktopHeader1SearchAndIcons.getBoundingClientRect().left)}px`;
    }
})

// Fullscreen Menu
desktopHeader1FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})
