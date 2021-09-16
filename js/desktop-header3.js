let desktopHeader3 = document.querySelector('.desktop-header3');
let desktopHeader3Searchbar = document.querySelector('.desktop-header3__searchbar');
let desktopHeader3SearchInput = desktopHeader3Searchbar.querySelector('input');
let desktopHeader3SearchIcon = desktopHeader3Searchbar.querySelector('.search-icon');
let desktopHeader3Links = document.querySelector('.desktop-header3__links')
let desktopHeader3Icons = document.querySelector('.desktop-header3__icons')
let desktopHeader3LogoAndSearch = document.querySelector('.desktop-header3__logo-and-search');

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader3FullscreenMenuOpenBtn = desktopHeader3.querySelector('.desktop-header3__fullscreen-menu-open-btn');

// Searchbar
desktopHeader3Searchbar.addEventListener('mouseover', () => {
    desktopHeader3Searchbar.classList.add('border');
})
desktopHeader3Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader3SearchInput.classList.contains('focused')) {
        desktopHeader3Searchbar.classList.add('border');
    }
    else {
        desktopHeader3Searchbar.classList.remove('border');
    }

})
desktopHeader3SearchIcon.addEventListener('click', () => {
    desktopHeader3SearchInput.focus();
})
desktopHeader3SearchInput.addEventListener('focus', () => {
    desktopHeader3Searchbar.classList.add('border');
    desktopHeader3SearchInput.classList.add('focused');
})
desktopHeader3SearchInput.addEventListener('blur', () => {
    desktopHeader3Searchbar.classList.remove('border');
    desktopHeader3SearchInput.classList.remove('focused');
})

let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If header is displayed on load
if (window.getComputedStyle(desktopHeader3).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader3Links).getPropertyValue('width'))
    var iconsWidth = parseInt(window.getComputedStyle(desktopHeader3Icons).getPropertyValue('width'))
    var logoAndSearchWidth = parseInt(window.getComputedStyle(desktopHeader3LogoAndSearch).getPropertyValue('width'))

    // Collapse
    if (linksWidth > (window.innerWidth - logoAndSearchWidth - iconsWidth - (fontSize * 7))) {
        desktopHeader3.classList.add('collapsed');
        desktopHeader3Links.classList.remove('show');
    }

}
// Same as above but when viewport width changes
window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader3Links.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader3Links).getPropertyValue('width'))
        var iconsWidth = parseInt(window.getComputedStyle(desktopHeader3Icons).getPropertyValue('width'))
        var logoAndSearchWidth = parseInt(window.getComputedStyle(desktopHeader3LogoAndSearch).getPropertyValue('width'))
    }
    if (linksWidth > (window.innerWidth - logoAndSearchWidth - iconsWidth - (fontSize * 7))) {
        desktopHeader3.classList.add('collapsed');
        desktopHeader3Links.classList.remove('show');
    }
    else {
        desktopHeader3.classList.remove('collapsed');
        desktopHeader3Links.classList.remove('show');
    }
})

// Fullscreen Menu
desktopHeader3FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})