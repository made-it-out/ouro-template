document.addEventListener('DOMContentLoaded', init)

function init() {
    let subtotal = document.querySelector('.cart__subtotal-amount')
    let products = Array.from(document.querySelectorAll('.cart__product'));

    if (products) {
        products.forEach(product => {
            const qtyMinus = product.querySelector('.cart__product-quantity-minus');
            const qtyPlus = product.querySelector('.cart__product-quantity-plus');
            let qtyInput = product.querySelector('.cart__product-quantity-input');
            let price = product.querySelector('.cart__product-price');
            let priceNumber = price.textContent.slice(1);
            let total = product.querySelector('.cart__product-price-total');
            let removeBtn = product.querySelector('.cart__product-remove-btn');


            // Increment quantity on plus click and update total
            qtyPlus.addEventListener('click', () => {
                qtyIncrement();
                updateSubtotal();
            })
            // Increment quantity on plus keydown and update total
            qtyPlus.addEventListener('keydown', (event) => {
                if (event.keyCode === 13 || event.keyCode === 32) {
                    qtyIncrement();
                    updateSubtotal();
                }
            })
            // Decrement quantity on minus click and update total
            qtyMinus.addEventListener('click', () => {
                qtyDecrement();
                updateSubtotal();
            });
            // Decrement quantity on minus keydown and update total
            qtyMinus.addEventListener('keydown', (event) => {
                if (event.keyCode === 13 || event.keyCode === 32) {
                    qtyDecrement();
                    updateSubtotal();
                }
            })

            function qtyIncrement() {
                qtyInput.value++;
                total.textContent = `$${(qtyInput.value * priceNumber).toFixed(2)}`
            }
            function qtyDecrement() {
                if (qtyInput.value > 1) {
                    qtyInput.value--;
                    total.textContent = `$${(qtyInput.value * priceNumber).toFixed(2)}`
                }
            }

            // Remove product on click
            removeBtn.addEventListener('click', () => {
                removeProduct(product);
                updateSubtotal();
            });
            // Remove product on keydown
            removeBtn.addEventListener('keydown', (event) => {
                if (event.keyCode === 13 || event.keyCode === 32) {
                    removeProduct(product);
                    updateSubtotal();
                }
            })

            function removeProduct(product) {
                product.remove();
                products = products.filter(prod => prod !== product);
            }
        })
    }

    // Updates the subtotal based on quantity change or product removal
    function updateSubtotal() {
        let totals = Array.from(document.querySelectorAll('.cart__product-price-total'));

        let totalsNumbers = totals.map(total => total.textContent.slice(1));

        if (products && products.length > 0) {
            subtotal.textContent = `$${totalsNumbers.reduce((previous, current) => (parseFloat(previous) + parseFloat(current)).toFixed(2))}`;
        } else {
            subtotal.textContent = '$0.00'
        }
    }
}