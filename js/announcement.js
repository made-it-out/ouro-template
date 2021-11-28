document.addEventListener('DOMContentLoaded', init)

function init() {
    const announcement = document.querySelector('.announcement');
    const closeBtn = announcement.querySelector('.announcement__close-btn');
    const slides = Array.from(announcement.querySelectorAll('.announcement__slide'));
    const indicators = Array.from(announcement.querySelectorAll('.announcement__indicator'));
    const interval = 5000;

    let activeIndex = 1;

    function changeIndex(index) {
        let inactiveSlides = slides.filter(slide => {
            return slide != slides[index]
        })
        inactiveSlides.forEach(slide => slide.classList.remove('announcement__slide--active'));
        let inactiveIndicators = indicators.filter(indicator => {
            return indicator != indicators[index]
        })
        inactiveIndicators.forEach(indicator => indicator.classList.remove('announcement__indicator--active'));

        slides[index].classList.add('announcement__slide--active');
        indicators[index].classList.add('announcement__indicator--active');

        activeIndex < slides.length - 1 ? activeIndex++ : activeIndex = 0;
        clearTimeout(slideshow);
        slideshow = setTimeout(() => changeIndex(activeIndex), interval)
    }

    let slideshow = setTimeout(() => changeIndex(activeIndex), interval)

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            activeIndex = index
            changeIndex(activeIndex);
        })
    })

    closeBtn.addEventListener('click', closeAnnouncement)
    closeBtn.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            closeAnnouncement();
        }
    })

    function closeAnnouncement() {
        clearTimeout(slideshow);
        announcement.remove();
    }
}