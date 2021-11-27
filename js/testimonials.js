document.addEventListener('DOMContentLoaded', init)
document.addEventListener('shopify:section:load', init)

function init() {
    const testimonialsSections = document.querySelectorAll('.testimonials');

    if (testimonialsSections) {
        testimonialsSections.forEach(section => {
            const slides = Array.from(section.querySelectorAll('.testimonials__slide'));
            const previousBtn = section.querySelector('.testimonials__previous');
            const nextBtn = section.querySelector('.testimonials__next');

            let i = 0;
            slides[i].classList.add('testimonials__slide--active')

            nextBtn.addEventListener('click', testimonialsIncrement)
            nextBtn.addEventListener('keydown', (e) => {
                if (e.keyCode === 13 || e.keyCode === 32) {
                    testimonialsIncrement()
                }
            })

            previousBtn.addEventListener('click', testimonialsDecrement)
            previousBtn.addEventListener('keydown', (e) => {
                if (e.keyCode === 13 || e.keyCode === 32) {
                    testimonialsDecrement()
                }
            })

            function testimonialsIncrement() {
                if (i < slides.length - 1) {
                    slides.forEach((slide, index) => {
                        slide.classList.remove('testimonials__slide--active');
                        slide.style.transform = `translateX(-${(i + 1) * 100}%)`;
                    })
                    i++
                    slides[i].classList.add('testimonials__slide--active');
                    slides[i].style.transform = `translateX(-${i * 100}%)`;
                }
                if (i === slides.length - 1) {
                    nextBtn.classList.remove('testimonials__next--active');
                }

                previousBtn.classList.add('testimonials__previous--active');
            }
            function testimonialsDecrement() {
                if (i > 0) {
                    slides.forEach((slide, index) => {
                        slide.classList.remove('testimonials__slide--active');
                        slide.style.transform = `translateX(-${(i - 1) * 100}%)`;
                    })
                    i--
                    slides[i].classList.add('testimonials__slide--active');
                    slides[i].style.transform = `translateX(-${i * 100}%)`;
                }
                if (i === 0) {
                    previousBtn.classList.remove('testimonials__previous--active');
                }

                nextBtn.classList.add('testimonials__next--active');
            }
        })
    }
}