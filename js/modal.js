document.addEventListener('DOMContentLoaded', init)
document.addEventListener('shopify:section:load', init)

function init() {
    // check if in theme editor so store owner can edit the modal without a cookie being added
    if (Shopify.designMode) {
        inThemeEditor();
    }
    else {
        inProduction();
    }
}

function inThemeEditor() {
    const modal = document.getElementById('modal-{{section.id}}');
    const delay = {{ section.settings.delay }
};
const closeBtn = modal.querySelector('.modal__close-btn');
const overlay = modal.querySelector('.modal__overlay');

closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
        closeModal();
    }
});
overlay.addEventListener('click', closeModal);
// close modal functions
function closeModal() {
    modal.classList.remove('modal--open')
    document.body.classList.remove('body--modal-open');
    window.removeEventListener('keydown', escBtnKeyDown, true);
}

function escBtnKeyDown(e) {
    if (e.keyCode === 27) {
        closeModal();
    }
}

function openModal() {
    modal.classList.add('modal--open')
    document.body.classList.add('body--modal-open')
    window.addEventListener('keydown', escBtnKeyDown, { once: true, capture: true })
}

setTimeout(openModal, delay);
    }

function inProduction() {
    // check for cookie
    let modalCookie = document.cookie.split('; ').find(index => index.startsWith("{{shop.name}}-{{section.id}}-modalSeen"));
    // If cookie exists, don't show modal
    if (modalCookie) {
        return;
    }
    // if no cookie
    else {
        const modal = document.getElementById('modal-{{section.id}}');
        const delay = {{ section.settings.delay }
    };
    const closeBtn = modal.querySelector('.modal__close-btn');
    const overlay = modal.querySelector('.modal__overlay');

    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            closeModal();
        }
    });
    overlay.addEventListener('click', closeModal);
    // close modal functions
    function closeModal() {
        modal.classList.remove('modal--open')
        document.body.classList.remove('body--modal-open');
        window.removeEventListener('keydown', escBtnKeyDown, true);
        document.cookie = "{{shop.name}}-{{section.id}}-modalSeen=true; max-age=2592000; secure";
    }

    function escBtnKeyDown(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    }

    function openModal() {
        modal.classList.add('modal--open')
        document.body.classList.add('body--modal-open')
        window.addEventListener('keydown', escBtnKeyDown, { once: true, capture: true })
    }

    setTimeout(openModal, delay);
}
    }