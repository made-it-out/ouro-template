// This is for placeholder dates. Not necessary for production.
let date = new Date();

let yesterday = new Date(date - 86400000);

let year = date.getFullYear();

if (document.querySelector('.footer__year')) {
    let footerYear = document.querySelector('.footer__year')
    footerYear.textContent = year;
}

if (document.querySelector('.blog-posts__post-date')) {
    let blogPostDates = document.querySelectorAll('.blog-posts__post-date')
    blogPostDates.forEach(postDate => postDate.textContent = yesterday.toDateString().slice(4));
}

if (document.querySelector('.blog__article-date')) {
    let blogDates = document.querySelectorAll('.blog__article-date');
    blogDates.forEach(blogDate => blogDate.textContent = yesterday.toDateString().slice(4));
}

if (document.querySelector('.article__date')) {
    let articleDates = document.querySelectorAll('.article__date');
    articleDates.forEach(articleDate => articleDate.textContent = yesterday.toDateString().slice(4));
}

if (document.querySelector('.account__order-date')) {
    let accountOrderDates = document.querySelectorAll('.account__order-date');
    accountOrderDates.forEach(accountOrderDate => accountOrderDate.textContent = yesterday.toDateString().slice(4));
}


if (document.querySelector('.order__date')) {
    let orderDates = document.querySelectorAll('.order__date');
    orderDates.forEach(orderDate => orderDate.textContent = `${yesterday.toDateString().slice(4)} at ${yesterday.toLocaleTimeString()}`)
}