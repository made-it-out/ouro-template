let desktopHeader6 = document.querySelector('.desktop-header6');
let desktopHeader6Searchbar = document.querySelector('.desktop-header6__searchbar');
let desktopHeader6SearchInput = desktopHeader6Searchbar.querySelector('input');
let desktopHeader6SearchIcon = desktopHeader6Searchbar.querySelector('.search-icon');
let desktopHeader6TopSearchbar = document.querySelector('.desktop-header6__top-searchbar')
let desktopHeader6TopSearchInput = desktopHeader6TopSearchbar.querySelector('input')
let desktopHeader6TopSearchIcon = document.querySelector('.desktop-header6__top-searchbar-icon')
let desktopHeader6Links = document.querySelector('.desktop-header6__links')
let desktopHeader6Top = document.querySelector('.desktop-header6__top')
let desktopHeader6Bottom = document.querySelector('.desktop-header6__bottom')

let fullscreenMenuD = document.querySelector('.fullscreen-menu');
let desktopHeader6FullscreenMenuOpenBtn = desktopHeader6.querySelector('.desktop-header6__fullscreen-menu-open-btn');

// Searchbar
desktopHeader6Searchbar.addEventListener('mouseover', () => {
    desktopHeader6Searchbar.classList.add('border');
})
desktopHeader6Searchbar.addEventListener('mouseout', () => {
    if (desktopHeader6SearchInput.classList.contains('focused')) {
        desktopHeader6Searchbar.classList.add('border');
    }
    else {
        desktopHeader6Searchbar.classList.remove('border');
    }

})
desktopHeader6SearchIcon.addEventListener('click', () => {
    desktopHeader6SearchInput.focus();
})
desktopHeader6SearchInput.addEventListener('focus', () => {
    desktopHeader6Searchbar.classList.add('border');
    desktopHeader6SearchInput.classList.add('focused');
})
desktopHeader6SearchInput.addEventListener('blur', () => {
    desktopHeader6Searchbar.classList.remove('border');
    desktopHeader6SearchInput.classList.remove('focused');
})
// Top Searchbar
desktopHeader6TopSearchbar.addEventListener('mouseover', () => {
    desktopHeader6TopSearchbar.classList.add('border');
})
desktopHeader6TopSearchbar.addEventListener('mouseout', () => {
    if (desktopHeader6TopSearchInput.classList.contains('focused')) {
        desktopHeader6TopSearchbar.classList.add('border');
    }
    else {
        desktopHeader6TopSearchbar.classList.remove('border');
    }

})
desktopHeader6TopSearchIcon.addEventListener('click', () => {
    desktopHeader6TopSearchInput.focus();
})
desktopHeader6TopSearchInput.addEventListener('focus', () => {
    desktopHeader6TopSearchbar.classList.add('border');
    desktopHeader6TopSearchInput.classList.add('focused');
})
desktopHeader6TopSearchInput.addEventListener('blur', () => {
    desktopHeader6TopSearchbar.classList.remove('border');
    desktopHeader6TopSearchInput.classList.remove('focused');
})

let fontSize = parseInt(window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size"));

// If screen is loaded while desktop header is dispalyed
if (window.getComputedStyle(desktopHeader6).getPropertyValue('display') != 'none') {
    var linksWidth = parseInt(window.getComputedStyle(desktopHeader6Links).getPropertyValue('width'))
    var searchbarWidth = parseInt(window.getComputedStyle(desktopHeader6Searchbar).getPropertyValue('width'))

    // Ideal layout
    if ((window.innerWidth / 2 + linksWidth / 2) <= desktopHeader6Searchbar.getBoundingClientRect().left) {
        desktopHeader6Links.style.marginRight = '0';
        desktopHeader6.classList.remove('collapsed');
        desktopHeader6.classList.remove('together');
        desktopHeader6Bottom.classList.remove('show');

    }
    // If links are too wide, collapse to hamburger
    else if (window.innerWidth <= (linksWidth + searchbarWidth + fontSize * 7)) {
        desktopHeader6.classList.add('collapsed');
        desktopHeader6.classList.remove('together');
        desktopHeader6Bottom.classList.remove('show');
    }
    // If links and searchbar collide
    else {
        desktopHeader6.classList.add('together');
        desktopHeader6.classList.remove('collapsed');
        desktopHeader6Bottom.classList.remove('show');
        desktopHeader6Links.style.marginRight = `${(window.innerWidth - desktopHeader6Searchbar.getBoundingClientRect().left)}px`;
    }
}


window.addEventListener('resize', () => {
    if (isNaN(linksWidth)) {
        desktopHeader6Bottom.classList.add('show');
        var linksWidth = parseInt(window.getComputedStyle(desktopHeader6Links).getPropertyValue('width'))
        var searchbarWidth = parseInt(window.getComputedStyle(desktopHeader6Searchbar).getPropertyValue('width'))
    }

    if ((window.innerWidth / 2 + linksWidth / 2) <= desktopHeader6Searchbar.getBoundingClientRect().left) {
        desktopHeader6.classList.remove('collapsed');
        desktopHeader6.classList.remove('together');
        desktopHeader6Bottom.classList.remove('show');
        desktopHeader6Links.style.marginRight = '0'
    }
    else if (window.innerWidth <= (linksWidth + searchbarWidth + fontSize * 7)) {
        desktopHeader6.classList.add('collapsed');
        desktopHeader6.classList.remove('together');
        desktopHeader6Bottom.classList.remove('show');
    }
    else {
        desktopHeader6Links.style.marginRight = `${(window.innerWidth - desktopHeader6Searchbar.getBoundingClientRect().left)}px`;
        desktopHeader6.classList.add('together');
        desktopHeader6.classList.remove('collapsed');
        desktopHeader6Bottom.classList.remove('show');
    }
})

// Fullscreen Menu
desktopHeader1FullscreenMenuOpenBtn.addEventListener('click', () => {
    fullscreenMenuD.classList.add('open');
    document.body.classList.add('modal-open');
})