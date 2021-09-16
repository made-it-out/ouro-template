// Product Quantity
let subtotal = document.querySelector('.cart__subtotal-number')
let products = document.querySelectorAll('.cart__product');

if (products) {
    products.forEach(product => {
        let qtyMinus = product.querySelector('.cart__product-quantity-minus');
        let qtyPlus = product.querySelector('.cart__product-quantity-plus');
        let qtyAmount = product.querySelector('.cart__product-quantity-picker');
        let productPrice = product.querySelector('.cart__product-price-number');
        let productTotal = product.querySelector('.cart__product-total-number');
        let removeBtn = product.querySelector('.cart__product-remove-btn');

        qtyAmount.addEventListener('input', (e) => {
            if (isNaN(e.target.value)) {
                e.target.value = '';
            }
        })
        qtyMinus.addEventListener('click', () => {
            if (qtyAmount.value > 1) {
                qtyAmount.value = qtyAmount.value - 1;
                productTotal.textContent = (qtyAmount.value * parseFloat(productPrice.textContent)).toFixed(2);
                subtotal.textContent = (parseFloat(subtotal.textContent) - parseFloat(productPrice.textContent)).toFixed(2);
            }
        })
        qtyPlus.addEventListener('click', () => {
            qtyAmount.value++;
            productTotal.textContent = (qtyAmount.value * parseFloat(productPrice.textContent)).toFixed(2);
            subtotal.textContent = (parseFloat(subtotal.textContent) + parseFloat(productPrice.textContent)).toFixed(2);
        })
        removeBtn.addEventListener('click', () => {
            subtotal.textContent = (parseFloat(subtotal.textContent) - parseFloat(productTotal.textContent)).toFixed(2);
            product.remove();
        })
    })
}