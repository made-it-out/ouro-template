let desktopHeader4 = document.querySelector('.desktop-header4');
let desktopHeader4Searchbar = document.querySelector('.desktop-header4__searchbar');
let desktopHeader4SearchInput = desktopHeader4Searchbar.querySelector('input');
let desktopHeader4SearchIcon = desktopHeader4Searchbar.querySelector('.search-icon');
let desktopHeader4Links = document.querySelector('.desktop-header4__links')
let desktopHeader4Top = document.querySelector('.desktop-header4__top')
let desktopHeader4Bottom = document.querySelector('.desktop-header4__bottom')

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader4FullscreenMenuOpenBtn = desktopHeader4.querySelector('.desktop-header4__fullscreen-menu-open-btn');

// Searchbar
desktopHeader4Searchbar.addEventListener('mouseover', () => {
    desktopHeader4Searchbar.classList.add('border');
})
desktopHeader4Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader4SearchInput.classList.contains('focused')) {
        desktopHeader4Searchbar.classList.add('border');
    }
    else {
        desktopHeader4Searchbar.classList.remove('border');
    }

})
desktopHeader4SearchIcon.addEventListener('click', () => {
    desktopHeader4SearchInput.focus();
})
desktopHeader4SearchInput.addEventListener('focus', () => {
    desktopHeader4Searchbar.classList.add('border');
    desktopHeader4SearchInput.classList.add('focused');
})
desktopHeader4SearchInput.addEventListener('blur', () => {
    desktopHeader4Searchbar.classList.remove('border');
    desktopHeader4SearchInput.classList.remove('focused');
})

let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If screen is loaded while desktop header is dispalyed
if (window.getComputedStyle(desktopHeader4).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader4Links).getPropertyValue('width'))

    // If links are too wide, collapse to hamburger
    if (window.innerWidth - linksWidth <= fontSize * 4.5) {
        desktopHeader4.classList.add('collapsed');
        desktopHeader4Bottom.classList.remove('show');
    }
    // Ideal layout
    else {
        desktopHeader4.classList.remove('collapsed');
        desktopHeader4Bottom.classList.remove('show');
    }
}

window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader4Bottom.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader4Links).getPropertyValue('width'))
    }

    if (window.innerWidth - linksWidth <= fontSize * 4.5) {
        desktopHeader4.classList.add('collapsed');
        desktopHeader4Bottom.classList.remove('show');
    }
    else {
        desktopHeader4.classList.remove('collapsed');
        desktopHeader4Bottom.classList.add('show');
    }
})

// Fullscreen Menu
desktopHeader4FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})