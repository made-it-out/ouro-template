document.addEventListener('DOMContentLoaded', init)

function init() {
    const modal = document.querySelector('.modal');
    const closeBtn = modal.querySelector('.modal__close-btn');
    const overlay = modal.querySelector('.modal__overlay');
    let modalShown = false;

    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            closeModal();
        }
    });
    overlay.addEventListener('click', closeModal);
    // close modal functions
    function closeModal() {
        modal.remove()
        document.body.classList.remove('body--modal-open');
    }

    function escBtnKeyDown(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    }

    function openModal() {
        modal.classList.add('modal--open')
        document.body.classList.add('body--modal-open')
        window.addEventListener('keydown', escBtnKeyDown, { once: true, capture: true });
        modalShown = true;
    }

    // Show modal on mouseleave
    document.body.addEventListener('mouseleave', () => {
        !modalShown ? openModal() : null; 
    })

}