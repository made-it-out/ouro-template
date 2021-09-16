// Get all testimonials incase there are multiple
let testimonials = Array.from(document.querySelectorAll('.testimonials'))

testimonials.forEach(testimonial => {
    // Pagination Indicators
    let slideIndicators = Array.from(testimonial.querySelectorAll('.testimonials__indicator'));
    // Array of slides
    let slides = Array.from(testimonial.querySelectorAll('.testimonials__slide'));

    //Carousel
    let i = 0;
    let carouselInterval = setInterval(carouselTimer, 5000)

    function carouselTimer() {
        // Get inactive slides and indicators
        let inactiveSlides = slides.filter(slide => {
            return slide != slides[i]
        });
        let inactiveSlideIndicators = slideIndicators.filter(slideIndicator => {
            return slideIndicator != slideIndicators[i]
        })
        // Remove class from inactive slides and indicators
        inactiveSlides.forEach(inactiveSlide => {
            inactiveSlide.classList.remove('testimonials__slide--active');
        })
        inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('testimonials__indicator--active');
        })
        if (i < slides.length - 1 && i < slideIndicators.length - 1) {
            // Remove class from first slide and indicator
            slides[i].classList.remove('testimonials__slide--active');
            slideIndicators[i].classList.remove('testimonials__indicator--active');
            i++;
            // Add class to next slide and indicator
            slides[i].classList.add('testimonials__slide--active');
            slideIndicators[i].classList.add('testimonials__indicator--active');
        }
        else {
            // Remove class from last slide and indicator
            slides[i].classList.remove('testimonials__slide--active');
            slideIndicators[i].classList.remove('testimonials__indicator--active');
            i = 0;
            // Add class to first slide and indicator
            slides[i].classList.add('testimonials__slide--active');
            slideIndicators[i].classList.add('testimonials__indicator--active');
        }
    }
    // Event listener for clicking indicators to jump to it's slide
    slideIndicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            i = slideIndicators.indexOf(indicator);
            // Get inactive slides and indicators
            let inactiveSlides = slides.filter(slide => {
                return slide != slides[i]
            });
            let inactiveSlideIndicators = slideIndicators.filter(slideIndicator => {
                return slideIndicator != slideIndicators[i]
            })
            // Remove class from inactive slides and indicators
            inactiveSlides.forEach(inactiveSlide => {
                inactiveSlide.classList.remove('testimonials__slide--active');
            })
            inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('testimonials__indicator--active');
            })
            // Add class to corresponding slide and indicator
            slides[i].classList.add('testimonials__slide--active');
            slideIndicators[i].classList.add('testimonials__indicator--active');

            // Clear interval so slide does not change
            clearInterval(carouselInterval);
            // Restart interval
            carouselInterval = setInterval(carouselTimer, 5000)
        })
    })
})