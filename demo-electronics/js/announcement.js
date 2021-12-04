document.addEventListener('DOMContentLoaded', init)

function init() {
    const announcement = document.querySelector('.announcement');
    const closeBtn = announcement.querySelector('.announcement__close-btn');
    const slides = Array.from(announcement.querySelectorAll('.announcement__slide'));
    const indicators = Array.from(announcement.querySelectorAll('.announcement__indicator'));
    const interval = 5000;

    let activeIndex = 1;

    // slideshow
    function changeIndex(index) {
        // get inactive slides
        let inactiveSlides = slides.filter(slide => {
            return slide != slides[index]
        })

        // remove active class from inactive slides
        inactiveSlides.forEach(slide => slide.classList.remove('announcement__slide--active'));

        // get inactive indicators
        let inactiveIndicators = indicators.filter(indicator => {
            return indicator != indicators[index]
        })
        // remove active class from inactive indicators
        inactiveIndicators.forEach(indicator => indicator.classList.remove('announcement__indicator--active'));

        // add active class to active slide and indicator
        slides[index].classList.add('announcement__slide--active');
        indicators[index].classList.add('announcement__indicator--active');

        // Change active index and reset the slideshow timeout
        activeIndex < slides.length - 1 ? activeIndex++ : activeIndex = 0;
        clearTimeout(slideshow);
        slideshow = setTimeout(() => changeIndex(activeIndex), interval)
    }

    // start the slideshow
    let slideshow = setTimeout(() => changeIndex(activeIndex), interval)

    // change slide when its indicator is clicked
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            activeIndex = index
            changeIndex(activeIndex);
        })
    })

    // close the announcement on click/focused keydown
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