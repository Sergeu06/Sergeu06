// cart.js (скрипт для страницы cart.html)

document.addEventListener('DOMContentLoaded', function () {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cart-items');

    // Отобразите товары в корзине
    cartItems.forEach(function (item) {
        var cartItem = document.createElement('div');
        cartItem.innerText = item;
        cartContainer.appendChild(cartItem);
    });
});
