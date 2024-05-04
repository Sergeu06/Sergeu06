function openModal(productName, productPrice) {
    var modal = document.getElementById('productModal');
    var productNameElement = document.getElementById('productName');
    var productPriceElement = document.getElementById('productPrice');

    productNameElement.textContent = 'Выбор товара: ' + productName;
    productPriceElement.textContent = productPrice;
    modal.style.display = 'flex';
    updateTotalPrice(); // Вызываем функцию обновления общей стоимости при открытии модального окна
  }

  function closeModal() {
    var modal = document.getElementById('productModal');
    modal.style.display = 'none';
  }

  function addToCart() {
    var selectedSize = document.getElementById('size').value;
    var selectedQuantity = document.getElementById('quantity').value;
    var productPrice = document.getElementById('productPrice').textContent;

    // Дополнительная логика добавления товара в корзину
    var totalPrice = selectedQuantity * parseFloat(productPrice);
    console.log('Товар добавлен в корзину. Размер:', selectedSize, 'Количество:', selectedQuantity, 'Общая стоимость:', totalPrice);
    closeModal(); // Закрытие модального окна после добавления товара
  }

  function updateTotalPrice() {
    var quantityInput = document.getElementById('quantity');
    var totalPriceElement = document.getElementById('totalPrice');
    var productPrice = document.getElementById('productPrice').textContent;

    // Рассчитываем общую стоимость и обновляем соответствующий элемент
    var totalPrice = quantityInput.value * parseFloat(productPrice);
    totalPriceElement.textContent = totalPrice;
  }






// В этой переменной будем хранить товары в корзине
var cartItems = [];

// Добавим функцию для отображения содержимого корзины
function showCartPopup() {
    var cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';

    // Отобразим содержимое корзины
    displayCartItems();
    updateTotalPrice();
}

// Добавим функцию для закрытия корзины
function closeCartPopup() {
    var cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}

// Функция для отображения содержимого корзины
function displayCartItems() {
    var cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = '';

    // Перебираем товары в корзине и добавляем их в отображение
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var cartItemElement = document.createElement('div');
        var itemTotalPrice = cartItem.price * cartItem.quantity;
        cartItemElement.innerHTML = `<p class="productItem">${cartItem.name} - Размер: ${cartItem.size} - Цена: ${cartItem.price} руб. - Количество: ${cartItem.quantity} - Общая стоимость: ${itemTotalPrice} руб.</p>`;
        cartContent.appendChild(cartItemElement);
    }

    // Подсчитываем и отображаем общую сумму
    var totalPriceElement = document.getElementById('totalPriceCart');
    var total = calculateTotalPrice();
    totalPriceElement.textContent = total;
}

// Функция для подсчета общей суммы в корзине
function calculateTotalPrice() {
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].quantity;
    }

    return total;
}


// Функция для добавления товара в корзину
function addToCart() {
    var selectedSize = document.getElementById('size').value;
    var selectedQuantity = document.getElementById('quantity').value;

    // Получаем данные продукта из модального окна
    var productNameElement = document.getElementById('productName');
    var productPriceElement = document.getElementById('productPrice');

    var productName = productNameElement.textContent;
    var productPrice = parseFloat(productPriceElement.textContent);

    // Проверяем, есть ли уже такой товар в корзине
    var existingItem = cartItems.find(item => item.name === productName && item.size === selectedSize);

    if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем его количество
        existingItem.quantity += parseInt(selectedQuantity);
    } else {
        // Если товара нет в корзине, добавляем новый элемент
        var newItem = {
            name: productName,
            price: productPrice,
            size: selectedSize,
            quantity: parseInt(selectedQuantity)
        };

        cartItems.push(newItem);
    }

    // Закрываем модальное окно и обновляем отображение корзины
    closeModal();
    displayCartItems();
}

// Функция для обновления общей стоимости при изменении количества товара
function updateTotalPriceCart() {
    var totalPriceCartElement = document.getElementById('totalPriceCart');
    if (totalPriceCartElement) {
        totalPriceCartElement.textContent = calculateTotalPrice();
    }


}


  