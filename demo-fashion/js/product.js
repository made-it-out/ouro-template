document.addEventListener('DOMContentLoaded', init)

function init() {
    const product = document.querySelector('.product');
    const slides = Array.from(product.querySelectorAll('.product__slide'));
    const indicators = Array.from(product.querySelectorAll('.product__slideshow-indicator'));
    const imgAlternates = Array.from(product.querySelectorAll('.product__img-alternate'));
    const qtyMinus = product.querySelector('.product__quantity-minus')
    const qtyPlus = product.querySelector('.product__quantity-plus')
    const qtyInput = product.querySelector('.product__quantity-input')

    // Change image and indicators
    function changeIndex(index) {
        // get inactive slides
        let inactiveSlides = slides.filter(slide => {
            return slide != slides[index]
        })
        // remove active class from inactive slides
        inactiveSlides.forEach(slide => slide.classList.remove('product__slide--active'));

        // get inactive indicators
        let inactiveIndicators = indicators.filter(indicator => {
            return indicator != indicators[index]
        })
        // remove active class from inactive indicators
        inactiveIndicators.forEach(indicator => indicator.classList.remove('product__slideshow-indicator--active'));

        // get inactive image alternates
        let inactiveImgAlternates = imgAlternates.filter(imgAlternate => {
            return imgAlternate != imgAlternates[index]
        })
        // remove active class from inactive image alternates
        inactiveImgAlternates.forEach(imgAlternate => imgAlternate.classList.remove('product__img-alternate--active'));

        // add active class to current
        slides[index].classList.add('product__slide--active');
        indicators[index].classList.add('product__slideshow-indicator--active');
        imgAlternates[index].classList.add('product__img-alternate--active');
    }

    // change slide when its indicator is clicked/focus keydown
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (event) => changeIndex(index));
        indicator.addEventListener('keydown', (event) => {
            if (event.keyCode === 13 || event.keyCode === 32) {
                changeIndex(index)
            }
        });
    })

    // change slide when its alternate image is clicked/focus keydown
    imgAlternates.forEach((imgAlternate, index) => {
        imgAlternate.addEventListener('click', (event) => changeIndex(index));
        imgAlternate.addEventListener('keydown', (event) => {
            if (event.keyCode === 13 || event.keyCode === 32) {
                changeIndex(index)
            }
        });
    })

    // Increment quantity on plus click/keydown
    qtyPlus.addEventListener('click', qtyIncrement)
    qtyPlus.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            qtyIncrement();
        }
    })
    // Decrement quantity on plus click/keydown
    qtyMinus.addEventListener('click', qtyDecrement);
    qtyMinus.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            qtyDecrement();
        }
    })

    function qtyIncrement() {
        qtyInput.value++;
    }
    function qtyDecrement() {
        if (qtyInput.value > 1) {
            qtyInput.value--;
        }
    }
}