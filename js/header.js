document.addEventListener('DOMContentLoaded', init)
document.addEventListener('shopify:section:load', init)

function init() {
    const header = document.querySelector('.header');
    const navbar = header.querySelector('.navbar');
    const searchbar = header.querySelector('.searchbar');
    const searchbarInput = searchbar.querySelector('.searchbar__input');
    const searchbarIcon = searchbar.querySelector('.searchbar__icon');
    const headerToggle = header.querySelector('.header__toggle')

    // navbar
    const navbarModal = navbar.querySelector('.navbar__modal')
    const navbarMenuNames = Array.from(navbar.querySelectorAll('.navbar__menu-name'));

    let activeIndex = null;

    navbarMenuNames.forEach((menuName, index) => {
        menuName.addEventListener('click', () => toggleMenuName(index));
        menuName.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 || e.keyCode === 32) {
                toggleMenuName(index)
            }
        });
    });


    function closeMenuName(index) {
        if (index !== null) {
            navbarMenuNames[index].classList.remove('navbar__menu-name--open');

            activeIndex = null;

            navbarModal.classList.remove('navbar__modal--open');
        }
    }

    function openMenuName(index) {
        navbarMenuNames[index].classList.add('navbar__menu-name--open');

        activeIndex = index;

        navbarModal.classList.add('navbar__modal--open');
    }

    function toggleMenuName(index) {
        if (index !== activeIndex) {
            // close active
            closeMenuName(activeIndex);
            // make this active
            openMenuName(index);
        }
        else {
            // close this menu
            closeMenuName(index);
        }
    }

    navbarModal.addEventListener('click', () => {
        closeMenuName(activeIndex);
    })

    // searchbar
    searchbarInput.addEventListener('input', searchbarChange);
    searchbarInput.addEventListener('focus', searchbarFocus);
    searchbarInput.addEventListener('blur', searchbarBlur);

    searchbarIcon.addEventListener('click', toggleSearchbar);
    searchbarIcon.addEventListener('keydown', (e) => {
        if(e.keyCode === 13 || e.keyCode === 32){
            toggleSearchbar()
        }
    });

    function searchbarChange(e) {
        if (searchbarInput.value.length > 0) {
            searchbarIcon.classList.remove('fa-search');
            searchbarIcon.classList.add('fa-times');
        }
        else {
            searchbarIcon.classList.add('fa-search');
            searchbarIcon.classList.remove('fa-times');
        }
    }

    function searchbarFocus(e) {
        if (searchbar.classList.contains('searchbar--expanded')) {
            searchbar.classList.add('searchbar--border');
        }
        if (searchbarInput.value.length > 0) {
            searchbarIcon.classList.remove('fa-search');
            searchbarIcon.classList.add('fa-times');
        }
    }

    function searchbarBlur(e) {
        searchbar.classList.remove('searchbar--border');
    }

    function toggleSearchbar(e) {
        if (!searchbar.classList.contains('searchbar--expanded')) {
            searchbarInput.focus();
            searchbar.classList.add('searchbar--expanded');
            header.classList.add('header--searchbar-expanded');
        }
        else {
            searchbarIcon.classList.add('fa-search');
            searchbarIcon.classList.remove('fa-times');
            searchbar.classList.remove('searchbar--expanded');
            header.classList.remove('header--searchbar-expanded');
        }
    }

    headerToggle.addEventListener('click', toggleNavbar)
    headerToggle.addEventListener('keydown', (e) => {
        if(e.keyCode === 13 || e.keyCode === 32){
            toggleNavbar()
        }
    })

    function toggleNavbar() {
        navbar.classList.toggle('navbar--shown');
        header.classList.toggle('header--navbar-shown');
        document.body.classList.toggle('body--navbar-shown');
        closeMenuName(activeIndex);
    }

    //if resized from small to larger screen
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            navbar.classList.remove('navbar--shown');
            header.classList.remove('header--navbar-shown');
            document.body.classList.remove('body--navbar-shown');
            closeMenuName(activeIndex);
        }
    });
}