document.addEventListener('DOMContentLoaded', init)
document.addEventListener('shopify:section:load', init)

function init() {
    const slideshow = document.getElementById(`{{section.id}}`);
    const slides = Array.from(slideshow.querySelectorAll('.slideshow__slide'));
    const indicators = Array.from(slideshow.querySelectorAll('.slideshow__indicator'));
    const interval = {{ section.settings.interval }
};


let activeIndex = 0;

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
}

let slideshowInterval = setInterval(() => changeIndex(activeIndex), interval)

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        activeIndex = index
        changeIndex(activeIndex);
    })
})
    }