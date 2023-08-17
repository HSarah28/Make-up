const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartLink = document.getElementById('cart');

let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartLink.textContent = `Warenkorb (${cartItems})`;
    });
});