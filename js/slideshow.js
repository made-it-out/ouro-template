document.addEventListener('DOMContentLoaded', init)

function init() {
    const slideshows = document.querySelectorAll('.slideshow');
    slideshows.forEach(slideshow => {
        const slides = Array.from(slideshow.querySelectorAll('.slideshow__slide'));
        const indicators = Array.from(slideshow.querySelectorAll('.slideshow__indicator'));
        const interval = 5000;

        let activeIndex = 1;

        function changeIndex(index) {
            if (index === 0) {

                let inactiveSlides = slides.filter(slide => {
                    return slide != slides[index]
                })
                inactiveSlides.forEach(slide => slide.classList.remove('slideshow__slide--active'));
                let inactiveIndicators = indicators.filter(indicator => {
                    return indicator != indicators[index]
                })
                inactiveIndicators.forEach(indicator => indicator.classList.remove('slideshow__indicator--active'));

                slides[index].classList.add('slideshow__slide--active');
                indicators[index].classList.add('slideshow__indicator--active');
            }
            else {
                let inactiveSlides = slides.filter(slide => {
                    return slide != slides[index]
                })
                inactiveSlides.forEach(slide => slide.classList.remove('slideshow__slide--active'));
                let inactiveIndicators = indicators.filter(indicator => {
                    return indicator != indicators[index]
                })
                inactiveIndicators.forEach(indicator => indicator.classList.remove('slideshow__indicator--active'));

                slides[index].classList.add('slideshow__slide--active');
                indicators[index].classList.add('slideshow__indicator--active');
            }

            activeIndex < slides.length - 1 ? activeIndex++ : activeIndex = 0;
            clearTimeout(slideshowInterval);
            slideshowInterval = setTimeout(() => changeIndex(activeIndex), interval)
        }

        let slideshowInterval = setTimeout(() => changeIndex(activeIndex), interval)

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                activeIndex = index
                changeIndex(activeIndex);
            })
        })
    })

}