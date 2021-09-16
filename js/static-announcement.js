// Get all announcements in case there are multiple
let staticAnnouncements = Array.from(document.querySelectorAll('.static-announcement'));

staticAnnouncements.forEach(announcement => {
    let staticAnnouncementCloseBtn = announcement.querySelector('.static-announcement__close-btn');

    staticAnnouncementCloseBtn.addEventListener('click', () => {
        announcement.remove();
    })
})