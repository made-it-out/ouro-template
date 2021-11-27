// Get all announcements incase there are multiple
let slideshowAnnouncements = Array.from(document.querySelectorAll('.slideshow-announcement'))

slideshowAnnouncements.forEach(announcement => {
    // Pagination Indicators
    let slideIndicators = Array.from(announcement.querySelectorAll('.slideshow-announcement__indicator'));
    // Array of slides
    let slides = Array.from(announcement.querySelectorAll('.slideshow-announcement__slide'));

    //Carousel
    let i = 0;
    let carouselInterval = setInterval(carouselTimer, 10000)

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
            inactiveSlide.classList.remove('slideshow-announcement__slide--active');
        })
        inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('slideshow-announcement__indicator--active');
        })
        if (i < slides.length - 1 && i < slideIndicators.length - 1) {
            // Remove class from first slide and indicator
            slides[i].classList.remove('slideshow-announcement__slide--active');
            slideIndicators[i].classList.remove('slideshow-announcement__indicator--active');
            i++;
            // Add class to next slide and indicator
            slides[i].classList.add('slideshow-announcement__slide--active');
            slideIndicators[i].classList.add('slideshow-announcement__indicator--active');
        }
        else {
            // Remove class from last slide and indicator
            slides[i].classList.remove('slideshow-announcement__slide--active');
            slideIndicators[i].classList.remove('slideshow-announcement__indicator--active');
            i = 0;
            // Add class to first slide and indicator
            slides[i].classList.add('slideshow-announcement__slide--active');
            slideIndicators[i].classList.add('slideshow-announcement__indicator--active');
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
                inactiveSlide.classList.remove('slideshow-announcement__slide--active');
            })
            inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('slideshow-announcement__indicator--active');
            })
            // Add class to corresponding slide and indicator
            slides[i].classList.add('slideshow-announcement__slide--active');
            slideIndicators[i].classList.add('slideshow-announcement__indicator--active');

            // Clear interval so slide does not change
            clearInterval(carouselInterval);
            // Restart interval
            carouselInterval = setInterval(carouselTimer, 5000)
        })
    })
    let slideshowAnnouncementCloseBtn = announcement.querySelector('.slideshow-announcement__close-btn');

    slideshowAnnouncementCloseBtn.addEventListener('click', () => {
        slideshowAnnouncementCloseBtn.parentElement.remove();
    }, [])
})