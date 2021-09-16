let desktopHeader7 = document.querySelector('.desktop-header7')
let desktopHeader7Links = document.querySelector('.desktop-header7__links')
let desktopHeader7Searchbar = document.querySelector('.desktop-header7__searchbar');
let desktopHeader7SearchInput = desktopHeader7Searchbar.querySelector('input');
let desktopHeader7SearchIcon = desktopHeader7Searchbar.querySelector('.search-icon')
let desktopHeader7Bottom = document.querySelector('.desktop-header7__bottom')
let desktopHeader7Top = document.querySelector('.desktop-header7__top')

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader7FullscreenMenuOpenBtn = desktopHeader7.querySelector('.desktop-header7__fullscreen-menu-open-btn');

let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If screen is loaded while desktop header is dispalyed
if (window.getComputedStyle(desktopHeader7).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader7Links).getPropertyValue('width'))

    // If links are too wide, collapse to hamburger
    if (window.innerWidth - linksWidth <= fontSize * 4.5 || linksWidth > 1100) {
        desktopHeader7.classList.add('collapsed');
        desktopHeader7Bottom.classList.remove('show');
    }
    // Ideal layout
    else {
        desktopHeader7.classList.remove('collapsed');
        desktopHeader7Bottom.classList.remove('show');
    }
}


window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        // desktopHeader7Bottom.style.display = 'flex'
        desktopHeader7Bottom.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader7Links).getPropertyValue('width'))
    }

    if (window.innerWidth - linksWidth <= fontSize * 4.5 || linksWidth > 1100) {
        desktopHeader7.classList.add('collapsed');
        desktopHeader7Bottom.classList.remove('show');
    }
    else {
        desktopHeader7.classList.remove('collapsed');
        desktopHeader7Bottom.classList.add('show');
    }
})


desktopHeader7Searchbar.addEventListener('mouseover', () => {
    desktopHeader7Searchbar.classList.add('border');
})
desktopHeader7Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader7SearchInput.classList.contains('focused')) {
        desktopHeader7Searchbar.classList.add('border');
    }
    else {
        desktopHeader7Searchbar.classList.remove('border');
    }

})
desktopHeader7SearchIcon.addEventListener('click', () => {
    desktopHeader7SearchInput.focus();
})
desktopHeader7SearchInput.addEventListener('focus', () => {
    desktopHeader7Searchbar.classList.add('border');
    desktopHeader7SearchInput.classList.add('focused');
})
desktopHeader7SearchInput.addEventListener('blur', () => {
    desktopHeader7Searchbar.classList.remove('border');
    desktopHeader7SearchInput.classList.remove('focused');
})

// Fullscreen Menu
desktopHeader7FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})