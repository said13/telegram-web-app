// Получение элементов DOM
const bakerySelectionScreen = document.getElementById('bakery-selection');
const bakeryList = document.getElementById('bakery-list');
const productMenuScreen = document.getElementById('product-menu');
const productCategories = document.getElementById('product-categories');
const cartScreen = document.getElementById('cart-screen');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutScreen = document.getElementById('checkout-screen');
const orderForm = document.getElementById('order-form');

// Переменные приложения
let selectedBakery = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Навигационные кнопки
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');

// Текущий экран
let currentScreen = 'bakery-selection';

// Функция для обновления состояния кнопок
function updateNavigationButtons() {
    // Кнопка "Назад"
    backButton.disabled = currentScreen === 'bakery-selection';

    // Кнопка "Вперед"
    if (currentScreen === 'bakery-selection' && selectedBakery) {
        nextButton.disabled = false;
    } else if (currentScreen === 'product-menu' && cart.length > 0) {
        nextButton.disabled = false;
    } else if (currentScreen === 'cart-screen') {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

// Обработчик кнопки "Назад"
backButton.addEventListener('click', () => {
    if (currentScreen === 'product-menu') {
        showScreen(bakerySelectionScreen);
        currentScreen = 'bakery-selection';
    } else if (currentScreen === 'cart-screen') {
        showScreen(productMenuScreen);
        currentScreen = 'product-menu';
    } else if (currentScreen === 'checkout-screen') {
        showScreen(cartScreen);
        currentScreen = 'cart-screen';
    }
    updateNavigationButtons();
});

// Обработчик кнопки "Вперед"
nextButton.addEventListener('click', () => {
    if (currentScreen === 'bakery-selection') {
        showScreen(productMenuScreen);
        currentScreen = 'product-menu';
    } else if (currentScreen === 'product-menu') {
        showScreen(cartScreen);
        currentScreen = 'cart-screen';
        displayCart();
    } else if (currentScreen === 'cart-screen') {
        showScreen(checkoutScreen);
        currentScreen = 'checkout-screen';
    }
    updateNavigationButtons();
});

// Обновляем состояние кнопок при каждом переходе
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
    updateNavigationButtons();
}

// Функции для отображения экранов
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// Отображение списка пекарен
function displayBakeries() {
    bakeries.forEach(bakery => {
        const li = document.createElement('li');
        li.textContent = `${bakery.name} — ${bakery.address}`;
        li.addEventListener('click', () => {
            selectedBakery = bakery;
            showScreen(productMenuScreen);
            displayProducts();
        });
        bakeryList.appendChild(li);
    });
}

function initMap() {
    // Создаем карту
    const map = new ymaps.Map('map', {
        center: [55.76, 37.64], // Центр Москвы
        zoom: 12,
        controls: ['zoomControl', 'geolocationControl']
    });

    // Мокаем местоположение пользователя
    const userLocation = [55.76, 37.62];

    // Добавляем маркер местоположения пользователя
    const userPlacemark = new ymaps.Placemark(userLocation, {
        balloonContent: 'Вы здесь'
    }, {
        preset: 'islands#geolocationIcon'
    });


    // Добавляем маркеры пекарен
    bakeries.forEach(bakery => {
        const placemark = new ymaps.Placemark(bakery.coordinates, {
            balloonContent: `<strong>${bakery.name}</strong><br>${bakery.address}`
        }, {
            preset: 'islands#blueFoodIcon'
        });

        placemark.events.add('click', function () {
            selectedBakery = bakery;
            currentScreen = 'product-menu';
            showScreen(productMenuScreen);
            displayProducts();
        });

        map.geoObjects.add(placemark);
    });

    map.geoObjects.add(userPlacemark);
    // Масштабируем карту, чтобы показать все маркеры
    map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 20 });
}


// Загрузка API Яндекс.Карт и инициализация карты
ymaps.ready(initMap);

function displayProducts() {
    const categories = [...new Set(products.map(p => p.category))];
    productCategories.innerHTML = '';

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const h2 = document.createElement('h2');
        h2.textContent = category;
        categoryDiv.appendChild(h2);

        const grid = document.createElement('div');
        grid.classList.add('product-grid');

        products
            .filter(p => p.category === category)
            .forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const img = document.createElement('img');
                img.src = product.image || 'images/placeholder.png'; // Добавьте поле image в data.js
                img.alt = product.name;

                const title = document.createElement('h3');
                title.textContent = product.name;

                const description = document.createElement('p');
                description.textContent = product.description;

                const price = document.createElement('div');
                price.classList.add('price');
                price.textContent = `${product.price}₽`;

                const quantityControls = document.createElement('div');
                quantityControls.classList.add('quantity-controls');

                const minusButton = document.createElement('button');
                minusButton.textContent = '-';
                minusButton.addEventListener('click', () => decreaseQuantity(product));

                const quantitySpan = document.createElement('span');
                const cartItem = cart.find(item => item.id === product.id);
                quantitySpan.textContent = cartItem ? cartItem.quantity : 0;

                const plusButton = document.createElement('button');
                plusButton.textContent = '+';
                plusButton.addEventListener('click', () => increaseQuantity(product));

                quantityControls.appendChild(minusButton);
                quantityControls.appendChild(quantitySpan);
                quantityControls.appendChild(plusButton);

                productCard.appendChild(img);
                productCard.appendChild(title);
                productCard.appendChild(description);
                productCard.appendChild(price);
                productCard.appendChild(quantityControls);

                grid.appendChild(productCard);
            });

        categoryDiv.appendChild(grid);
        productCategories.appendChild(categoryDiv);
    });
}

function increaseQuantity(product) {
    addToCart(product);
    updateProductQuantity(product.id);
}

function decreaseQuantity(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity <= 0) {
            cart = cart.filter(item => item.id !== product.id);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateProductQuantity(product.id);
    }
}

function updateProductQuantity(productId) {
    const quantitySpans = document.querySelectorAll('.quantity-controls span');
    quantitySpans.forEach(span => {
        const parent = span.parentElement.parentElement;
        const title = parent.querySelector('h3').textContent;
        const product = products.find(p => p.name === title);
        if (product.id === productId) {
            const cartItem = cart.find(item => item.id === productId);
            span.textContent = cartItem ? cartItem.quantity : 0;
        }
    });
    updateNavigationButtons();
}


// Добавление продукта в корзину
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину');
}

// Отображение корзины
function displayCart() {
    cartItems.innerHTML = '';
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} — ${item.price * item.quantity}₽`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => removeFromCart(item.id));
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Итого: ${total}₽`;
}

// Удаление продукта из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Обработка оформления заказа
orderForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const orderData = {
        name,
        phone,
        paymentMethod,
        cart,
        total: calculateTotalPrice(),
        orderId: Date.now()
    };

    // Имитация отправки данных на сервер и получения ссылки на оплату
    if (paymentMethod === 'ya' || paymentMethod === 't') {
        // Здесь вместо реального API используем тестовую ссылку
        const paymentUrl = getTestPaymentUrl(paymentMethod, orderData);

        // Открываем страницу оплаты в новом окне
        window.open(paymentUrl, '_blank');

        // Переходим на экран подтверждения заказа
        showScreen(document.getElementById('order-confirmation-screen'));
        generateQRCode(orderData);

        // Очищаем корзину
        localStorage.removeItem('cart');
        cart = [];
    }
});

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getTestPaymentUrl(paymentMethod, orderData) {
    // В реальной интеграции вы бы отправили данные заказа на сервер
    // и получили ссылку на оплату от платежной системы
    if (paymentMethod === 'ya') {
        return `https://pay.yandex.ru/test?orderId=${orderData.orderId}&amount=${orderData.total}`;
    } else if (paymentMethod === 't') {
        return `https://securepay.tinkoff.ru/test?orderId=${orderData.orderId}&amount=${orderData.total}`;
    }
}

// Функция генерации QR-кода
function generateQRCode() {
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    // Создаем данные для QR-кода (например, ID заказа или другая информация)
    const orderData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        orderId: Date.now()
    };

    // Генерируем QR-код
    new QRCode(qrCodeDiv, {
        text: JSON.stringify(orderData),
        width: 200,
        height: 200
    });
}

// Кнопка "Вернуться в меню"
document.getElementById('back-to-menu').addEventListener('click', () => {
    showScreen(bakerySelectionScreen);
});

// Навешивание обработчиков
document.getElementById('view-cart').addEventListener('click', () => {
    showScreen(cartScreen);
    displayCart();
});

document.getElementById('checkout').addEventListener('click', () => {
    showScreen(checkoutScreen);
});

// Инициализация приложения
displayBakeries();

