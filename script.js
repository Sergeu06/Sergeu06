// script.js

document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        var product = event.target.parentElement;
        var productName = product.querySelector('h2').innerText;

        // Получите текущие товары в корзине из localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Добавьте новый товар в корзину
        cartItems.push(productName);

        // Сохраните обновленные товары в localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Перенаправление на страницу корзины
        window.location.href = 'cart.html';
    }
});
