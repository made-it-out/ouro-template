let desktopHeader2 = document.querySelector('.desktop-header2');
let desktopHeader2Logo = document.querySelector('.desktop-header2__logo');
let desktopHeader2Searchbar = document.querySelector('.desktop-header2__searchbar');
let desktopHeader2SearchInput = desktopHeader2Searchbar.querySelector('input');
let desktopHeader2SearchIcon = desktopHeader2Searchbar.querySelector('.search-icon');
let desktopHeader2Links = document.querySelector('.desktop-header2__links')
let desktopHeader2SearchAndIcons = document.querySelector('.desktop-header2__search-and-icons');

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader2FullscreenMenuOpenBtn = desktopHeader2.querySelector('.desktop-header2__fullscreen-menu-open-btn');

// Searchbar
desktopHeader2Searchbar.addEventListener('mouseover', () => {
    desktopHeader2Searchbar.classList.add('border');
})
desktopHeader2Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader2SearchInput.classList.contains('focused')) {
        desktopHeader2Searchbar.classList.add('border');
    }
    else {
        desktopHeader2Searchbar.classList.remove('border');
    }

})
desktopHeader2SearchIcon.addEventListener('click', () => {
    desktopHeader2SearchInput.focus();
})
desktopHeader2SearchInput.addEventListener('focus', () => {
    desktopHeader2Searchbar.classList.add('border');
    desktopHeader2SearchInput.classList.add('focused');
})
desktopHeader2SearchInput.addEventListener('blur', () => {
    desktopHeader2Searchbar.classList.remove('border');
    desktopHeader2SearchInput.classList.remove('focused');
})


let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If header is displayed on load
if (window.getComputedStyle(desktopHeader2).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader2Links).getPropertyValue('width'))
    var logoWidth = parseInt(window.getComputedStyle(desktopHeader2Logo).getPropertyValue('width'))
    var searchAndIconsWidth = parseInt(window.getComputedStyle(desktopHeader2SearchAndIcons).getPropertyValue('width'))

    // Collapse
    if (linksWidth > (window.innerWidth - searchAndIconsWidth - logoWidth - (fontSize * 7))) {
        desktopHeader2.classList.add('collapsed');
        desktopHeader2Links.classList.remove('show');
    }
    // Ideal layout
    else {
        desktopHeader2.classList.remove('collapsed');
        desktopHeader2Links.classList.remove('show');
    }

}
// Same as above but when viewport width changes
window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader2Links.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader2Links).getPropertyValue('width'))
        var logoWidth = parseInt(window.getComputedStyle(desktopHeader2Logo).getPropertyValue('width'))
        var searchAndIconsWidth = parseInt(window.getComputedStyle(desktopHeader2SearchAndIcons).getPropertyValue('width'))
    }
    if (linksWidth > (window.innerWidth - searchAndIconsWidth - logoWidth - (fontSize * 7))) {
        desktopHeader2.classList.add('collapsed');
        desktopHeader2Links.classList.remove('show');
    }
    else {
        desktopHeader2.classList.remove('collapsed');
        desktopHeader2Links.classList.add('show');
    }
})

// Fullscreen Menu
desktopHeader2FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
        document.body.classList.add('modal-open');
})