// This is for placeholder dates. Not necessary for production.
let date = new Date();

let yesterday = new Date(date - 86400000);

let year = date.getFullYear();

if (document.querySelector('.footer__year')) {
    let footerYear = document.querySelector('.footer__year')
    footerYear.textContent = year;
}

if (document.querySelector('.placeholder-date')) {
    let placeholderDates = document.querySelectorAll('.placeholder-date')
    placeholderDates.forEach(placeholderDate => placeholderDate.textContent = yesterday.toDateString().slice(4));
}