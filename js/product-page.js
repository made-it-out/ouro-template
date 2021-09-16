// Pagination Indicators
let slideIndicators = Array.from(document.querySelectorAll('.product-page__product-slideshow-indicator'));
let imgSlideIndicators = Array.from(document.querySelectorAll('.product-page__product-img-alternate'));
// Array of slides
let slides = Array.from(document.querySelectorAll('.product-page__product-slide'));

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
            inactiveSlide.classList.remove('product-page__product-slide--active');
        })
        inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('product-page__product-slideshow-indicator--active');
        })
        inactiveimgSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('product-page__product-img-alternate--active');
        })
        // Add class to corresponding slide and indicator
        slides[i].classList.add('product-page__product-slide--active');
        slideIndicators[i].classList.add('product-page__product-slideshow-indicator--active');
        imgSlideIndicators[i].classList.add('product-page__product-img-alternate--active');
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
            inactiveSlide.classList.remove('product-page__product-slide--active');
        })
        inactiveSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('product-page__product-slideshow-indicator--active');
        })
        inactiveimgSlideIndicators.forEach(inactiveSlideIndicator => {
            inactiveSlideIndicator.classList.remove('product-page__product-img-alternate--active');
        })
        // Add class to corresponding slide and indicator
        slides[i].classList.add('product-page__product-slide--active');
        slideIndicators[i].classList.add('product-page__product-slideshow-indicator--active');
        imgSlideIndicators[i].classList.add('product-page__product-img-alternate--active');
    })
})


// Product Quantity
let qtyMinus = document.querySelector('.product-page__product-quantity-minus');
let qtyPlus = document.querySelector('.product-page__product-quantity-plus');
let qtyAmount = document.querySelector('.product-page__product-quantity-picker');

qtyAmount.addEventListener('input', (e) => {
    if (isNaN(e.target.value)) {
        e.target.value = '';
    }
})
qtyMinus.addEventListener('click', () => {
    if (qtyAmount.value > 1) {
        qtyAmount.value--;
    }
})
qtyPlus.addEventListener('click', () => {
    qtyAmount.value++;
})



// Product Overview Accordion
let accordionItems = document.querySelectorAll('.product-page__product-information-accordion-item')

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    })
})