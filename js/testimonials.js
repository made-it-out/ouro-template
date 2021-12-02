document.addEventListener('DOMContentLoaded', init)

function init() {
    const testimonialsSections = document.querySelectorAll('.testimonials');

    if (testimonialsSections) {
        testimonialsSections.forEach(section => {
            const slides = Array.from(section.querySelectorAll('.testimonials__slide'));
            const previousBtn = section.querySelector('.testimonials__previous');
            const nextBtn = section.querySelector('.testimonials__next');

            // Add active class to first slide
            let i = 0;
            slides[i].classList.add('testimonials__slide--active')

            // Change slide on next button click/keydown
            nextBtn.addEventListener('click', testimonialsIncrement)
            nextBtn.addEventListener('keydown', (e) => {
                if (e.keyCode === 13 || e.keyCode === 32) {
                    testimonialsIncrement()
                }
            })

            // Change slide on previous button click/keydown
            previousBtn.addEventListener('click', testimonialsDecrement)
            previousBtn.addEventListener('keydown', (e) => {
                if (e.keyCode === 13 || e.keyCode === 32) {
                    testimonialsDecrement()
                }
            })

            function testimonialsIncrement() {
                if (i < slides.length - 1) {
                    // move slides left
                    slides.forEach((slide, index) => {
                        slide.classList.remove('testimonials__slide--active');
                        slide.style.transform = `translateX(-${(i + 1) * 100}%)`;
                    })
                    i++
                    slides[i].classList.add('testimonials__slide--active');
                    slides[i].style.transform = `translateX(-${i * 100}%)`;
                }
                if (i === slides.length - 1) {
                    // remove active class from next button if at the end
                    nextBtn.classList.remove('testimonials__next--active');
                }

                // add active class to previous button
                previousBtn.classList.add('testimonials__previous--active');
            }
            function testimonialsDecrement() {
                if (i > 0) {
                    // move slides right
                    slides.forEach((slide, index) => {
                        slide.classList.remove('testimonials__slide--active');
                        slide.style.transform = `translateX(-${(i - 1) * 100}%)`;
                    })
                    i--
                    slides[i].classList.add('testimonials__slide--active');
                    slides[i].style.transform = `translateX(-${i * 100}%)`;
                }
                if (i === 0) {
                    // remove active class from previous button if at the beginning
                    previousBtn.classList.remove('testimonials__previous--active');
                }

                // add active class to next button
                nextBtn.classList.add('testimonials__next--active');
            }
        })
    }
}