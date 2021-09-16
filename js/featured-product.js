let featuredProducts = Array.from(document.querySelectorAll('.featured-product'));

featuredProducts.forEach(featuredProduct => {
    // Pagination Indicators
    let slideIndicators = Array.from(featuredProduct.querySelectorAll('.featured-product__product-slideshow-indicator'));
    let imgSlideIndicators = Array.from(featuredProduct.querySelectorAll('.featured-product__product-img-alternate'));
    // Array of slides
    let slides = Array.from(featuredProduct.querySelectorAll('.featured-product__product-slide'));

    //Carousel
    let i = 0;

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
            let inactiveimgSlideIndicators = imgSlideIndicators.filter(slideIndicator => {
                return slideIndicator != imgSlideIndicators[i]
            })
            // Remove class from inactive slides and indicators
            inactiveSlides.forEach(inactiveSlide => {
                inactiveSlide.classList.remove('featured-product__product-slide--active');
            })
            inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('featured-product__product-slideshow-indicator--active');
            })
            inactiveimgSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('featured-product__product-img-alternate--active');
            })
            // Add class to corresponding slide and indicator
            slides[i].classList.add('featured-product__product-slide--active');
            slideIndicators[i].classList.add('featured-product__product-slideshow-indicator--active');
            imgSlideIndicators[i].classList.add('featured-product__product-img-alternate--active');
        })
    })
    imgSlideIndicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            i = imgSlideIndicators.indexOf(indicator);
            // Get inactive slides and indicators
            let inactiveSlides = slides.filter(slide => {
                return slide != slides[i]
            });
            let inactiveSlideIndicators = slideIndicators.filter(slideIndicator => {
                return slideIndicator != slideIndicators[i]
            })
            let inactiveimgSlideIndicators = imgSlideIndicators.filter(slideIndicator => {
                return slideIndicator != imgSlideIndicators[i]
            })
            // Remove class from inactive slides and indicators
            inactiveSlides.forEach(inactiveSlide => {
                inactiveSlide.classList.remove('featured-product__product-slide--active');
            })
            inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('featured-product__product-slideshow-indicator--active');
            })
            inactiveimgSlideIndicators.forEach(inactiveSlideIndicator => {
                inactiveSlideIndicator.classList.remove('featured-product__product-img-alternate--active');
            })
            // Add class to corresponding slide and indicator
            slides[i].classList.add('featured-product__product-slide--active');
            slideIndicators[i].classList.add('featured-product__product-slideshow-indicator--active');
            imgSlideIndicators[i].classList.add('featured-product__product-img-alternate--active');
        })
    })
})