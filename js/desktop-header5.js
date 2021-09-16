let desktopHeader5 = document.querySelector('.desktop-header5');
let desktopHeader5Searchbar = document.querySelector('.desktop-header5__searchbar');
let desktopHeader5SearchInput = desktopHeader5Searchbar.querySelector('input');
let desktopHeader5SearchIcon = desktopHeader5Searchbar.querySelector('.search-icon');
let desktopHeader5Links = document.querySelector('.desktop-header5__links')
let desktopHeader5Top = document.querySelector('.desktop-header5__top')
let desktopHeader5Bottom = document.querySelector('.desktop-header5__bottom')

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader5FullscreenMenuOpenBtn = desktopHeader5.querySelector('.desktop-header5__fullscreen-menu-open-btn');

// Searchbar
desktopHeader5Searchbar.addEventListener('mouseover', () => {
    desktopHeader5Searchbar.classList.add('border');
})
desktopHeader5Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader5SearchInput.classList.contains('focused')) {
        desktopHeader5Searchbar.classList.add('border');
    }
    else {
        desktopHeader5Searchbar.classList.remove('border');
    }

})
desktopHeader5SearchIcon.addEventListener('click', () => {
    desktopHeader5SearchInput.focus();
})
desktopHeader5SearchInput.addEventListener('focus', () => {
    desktopHeader5Searchbar.classList.add('border');
    desktopHeader5SearchInput.classList.add('focused');
})
desktopHeader5SearchInput.addEventListener('blur', () => {
    desktopHeader5Searchbar.classList.remove('border');
    desktopHeader5SearchInput.classList.remove('focused');
})

let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If screen is loaded while desktop header is dispalyed
if (window.getComputedStyle(desktopHeader5).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader5Links).getPropertyValue('width'))

    // If links are too wide, collapse to hamburger
    if (window.innerWidth - linksWidth <= fontSize * 4.5 || linksWidth > 1100) {
        desktopHeader5.classList.add('collapsed');
        desktopHeader5Bottom.classList.remove('show');
    }
    // Ideal layout
    else {
        desktopHeader5.classList.remove('collapsed');
        desktopHeader5Bottom.classList.remove('show');
    }
}

window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader5Bottom.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader5Links).getPropertyValue('width'))
    }

    if (window.innerWidth - linksWidth <= fontSize * 4.5 || linksWidth > 1100) {
        desktopHeader5.classList.add('collapsed');
        desktopHeader5Bottom.classList.remove('show');
    }
    else {
        desktopHeader5.classList.remove('collapsed');
        desktopHeader5Bottom.classList.add('show');
    }
})

// Fullscreen Menu
desktopHeader5FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})