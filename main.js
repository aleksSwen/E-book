// массивы с данными

const URL = [
    'img/products_img_'
];

let CLOTHES = [
    'Notebook',
    'Mouse',
    'Keyboard',
    'Gamepad'
];
let PRICE = [70000, 5000, 10000, 4500];

// собираем из массивов четыре объекта
function getArrayOfObjects() {
    let local = [];

    for (let i = 0; i < CLOTHES.length; i++) {
        local.push({
            productCloth: CLOTHES[i],
            productPrice: PRICE[i],
            productImg: `${URL}${i + 1}.jpg`
        })
    }
    return local;
}

// собираем каталог
let catalog = {
    container: null,
    items: [],
    init() {
        this.container = document.querySelector('#catalog');
        this._fillCatalog();
        this._render();
    },
    _fillCatalog() {
        this.items = getArrayOfObjects();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach( products => {
            htmlStr += renderProduct(products);
        })
        this.container.innerHTML = htmlStr;
    }
}

// генерируем верстку
function renderProduct(products) {
    return `<div class="product">
            <img src="${products.productImg}" alt="img" class="product_img">
            <div class="product_content">
                <h3 class="product_title">${products.productCloth}</h3>
                <p class="product_price">${products.productPrice} \u20bd</p>
            </div>
            <button class="product_add">Добавить в корзину</button>
            </div>`;
}

// инизиализируем каталог
catalog.init();