// Пекарни
const bakeries = [
    { id: 1, name: 'Пекарня №1', address: 'ул. Лесная, д. 5', coordinates: [55.7558, 37.6173] },
    { id: 2, name: 'Пекарня №2', address: 'ул. Пушкина, д. 10', coordinates: [55.7512, 37.6185] },
    { id: 3, name: 'Пекарня №3', address: 'ул. Тверская, д. 15', coordinates: [55.7654, 37.6051] },
    { id: 4, name: 'Пекарня №4', address: 'ул. Большая Никитская, д. 22', coordinates: [55.7522, 37.5937] },
    { id: 5, name: 'Пекарня №5', address: 'ул. Арбат, д. 30', coordinates: [55.7493, 37.5808] },
    { id: 6, name: 'Пекарня №6', address: 'ул. Пресненская, д. 8', coordinates: [55.7574, 37.5612] },
    { id: 7, name: 'Пекарня №7', address: 'ул. Новослободская, д. 20', coordinates: [55.7798, 37.6012] },
    { id: 8, name: 'Пекарня №8', address: 'ул. Знаменка, д. 12', coordinates: [55.7526, 37.6061] },
    { id: 9, name: 'Пекарня №9', address: 'ул. Садовая-Кудринская, д. 14', coordinates: [55.7642, 37.5795] },
    { id: 10, name: 'Пекарня №10', address: 'ул. Спиридоновка, д. 17', coordinates: [55.7561, 37.5932] },
    { id: 11, name: 'Пекарня №11', address: 'ул. Малая Бронная, д. 4', coordinates: [55.7601, 37.6034] },
    { id: 12, name: 'Пекарня №12', address: 'ул. Маросейка, д. 7', coordinates: [55.7569, 37.6335] },
    { id: 13, name: 'Пекарня №13', address: 'ул. Большая Дмитровка, д. 11', coordinates: [55.7648, 37.6155] },
    { id: 14, name: 'Пекарня №14', address: 'ул. Сретенка, д. 21', coordinates: [55.7696, 37.6331] },
    { id: 15, name: 'Пекарня №15', address: 'ул. Ордынка, д. 17', coordinates: [55.7372, 37.6227] },
    { id: 16, name: 'Пекарня №16', address: 'ул. Столешников переулок, д. 12', coordinates: [55.7639, 37.6150] },
    { id: 17, name: 'Пекарня №17', address: 'ул. Большая Якиманка, д. 18', coordinates: [55.7352, 37.6183] },
    { id: 18, name: 'Пекарня №18', address: 'ул. Шаболовка, д. 26', coordinates: [55.7186, 37.6073] },
    { id: 19, name: 'Пекарня №19', address: 'ул. Кузнецкий мост, д. 19', coordinates: [55.7646, 37.6215] },
    { id: 20, name: 'Пекарня №20', address: 'ул. Красная Пресня, д. 32', coordinates: [55.7598, 37.5591] }
];

// Продукты
const products = [
    { id: 1, name: 'Лепешка классическая', description: 'Свежая лепешка из печи', price: 50, category: 'Лепешки', image: 'images/lep1.png' },
    { id: 2, name: 'Пицца Маргарита', description: 'Классическая пицца с томатами и сыром', price: 300, category: 'Пиццы', image: 'images/pizza1.png' },
    { id: 3, name: 'Пита', description: 'Небольшая пита с воздушной текстурой', price: 40, category: 'Лепешки', image: 'images/lep3.png' },
    { id: 4, name: 'Пицца 4 сыра', description: 'Пицца с сыром моцарелла, дор блю, чеддер и пармезан', price: 350, category: 'Пиццы', image: 'images/pizza2.png' },
    { id: 5, name: 'Румяная лепешка', description: 'Лепешка с хрустящей корочкой', price: 55, category: 'Лепешки', image: 'images/lep2.png' },
    { id: 6, name: 'Комбо "Быстрый перекус"', description: 'Лепешка и напиток на выбор', price: 150, category: 'Комбо', image: 'images/combo1.png' },
    { id: 7, name: 'Комбо "Семейный"', description: '2 лаваша и хлеб с семенами', price: 250, category: 'Комбо', image: 'images/combo2.png' },
    { id: 8, name: 'Лаваш тонкий', description: 'Традиционный армянский лаваш', price: 30, category: 'Лепешки', image: 'images/lep4.png' },
    { id: 9, name: 'Пицца Пепперони', description: 'Пицца с острыми колбасками и сыром', price: 350, category: 'Пиццы', image: 'images/pizza3.png' }
];
