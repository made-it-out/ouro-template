document.addEventListener('DOMContentLoaded', init)

function init() {
    const slideshows = document.querySelectorAll('.slideshow');
    slideshows.forEach(slideshow => {
        const slides = Array.from(slideshow.querySelectorAll('.slideshow__slide'));
        const indicators = Array.from(slideshow.querySelectorAll('.slideshow__indicator'));
        const interval = 5000;

        let activeIndex = 1;

        // slideshow
        function changeIndex(index) {
            // get inactive slides
            let inactiveSlides = slides.filter(slide => {
                return slide != slides[index]
            })

            // remove active class from inactive slides
            inactiveSlides.forEach(slide => slide.classList.remove('slideshow__slide--active'));

            // get inactive indicators
            let inactiveIndicators = indicators.filter(indicator => {
                return indicator != indicators[index]
            })
            // remove active class from inactive indicators
            inactiveIndicators.forEach(indicator => indicator.classList.remove('slideshow__indicator--active'));

            // add active class to active slide and indicator
            slides[index].classList.add('slideshow__slide--active');
            indicators[index].classList.add('slideshow__indicator--active');

            // Change active index and reset the slideshow timeout
            activeIndex < slides.length - 1 ? activeIndex++ : activeIndex = 0;
            clearTimeout(slideshowInterval);
            slideshowInterval = setTimeout(() => changeIndex(activeIndex), interval)
        }

        // start the slideshow
        let slideshowInterval = setTimeout(() => changeIndex(activeIndex), interval)

        // change slide when its indicator is clicked
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                activeIndex = index
                changeIndex(activeIndex);
            })
        })
    })

}