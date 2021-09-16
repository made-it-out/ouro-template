// Get all in case there are multiple
let fullscreenMenus = Array.from(document.querySelectorAll('.fullscreen-menu'));

fullscreenMenus.forEach(fullscreenMenu => {
    let fullscreenMenuCloseBtn = fullscreenMenu.querySelector('.fullscreen-menu__close-btn')
    let fullscreenMenuLinkOpenBtns = fullscreenMenu.querySelectorAll('.fullscreen-menu__link-open-btn')
    let fullscreenMenuLinkCloseBtns = fullscreenMenu.querySelectorAll('.fullscreen-menu__link-close-btn')

    fullscreenMenuCloseBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
        document.body.classList.remove('modal-open')
    })
    fullscreenMenuLinkOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
        })
    })
    fullscreenMenuLinkCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
        })
    })
})