
const cartGood = {
    render(good) {
        return `<div class="good">
                    <b>Наименование: ${good.name}</b>
                    <b>Цена: ${good.price}</b>
                    <b>Количество: ${good.quanity}</b>
                    <b>Стоимость: ${good.price * good.quanity}</b>
                </div>`;
    }
}

const goodInGoods = {
    render(good) {
        return `<div class="good__in__goods" data-id="${good.id}">
                    <b>${good.name}</b>
                    <span>Цена: <b>${good.price}</b></span>
                    <br>
                    <button class="add__to__cart">Добавить в корзину</button>
                </div>`;
    }
}

const addToCart = {
    add(goodCopy) {
        return cart1.addToCart(goodCopy);
    }
}

const cart = {
    cartElement: null,
    cartStatus: null,
    cartButton: null,
    cartGood,
    goods: [],
    
    addAllSumm() {
        return this.goods.reduce((partial_sum, a) => partial_sum + a.price * a.quanity, 0);
    },
    addAllQuanity() {
        return this.goods.reduce((partial_sum, a) => partial_sum + a.quanity, 0);
    },
    init() {
        this.cartElement = document.getElementById('cart');
        this.cartStatus = document.getElementById('cart__status');
        this.cartButton = document.querySelector('#clear__btn');
        this.cartButtonBuy = document.querySelector('#buy__btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.cartButtonBuy.addEventListener('click', this.buyCart.bind(this));
        this.renderCart();
    },
    clearCart() {
        this.goods = [];
        this.renderCart();
    },
    buyCart() {
        alert(
            `Куплено ${this.addAllQuanity()} товаров на сумму ${this.addAllSumm()} р.`
        );
        this.clearCart();
    },
    addToCart(good) {
        let searchGood = this.goods.find(searchGood => searchGood.id === good.id);
        if (searchGood) {
            searchGood.quanity++;
        } else {
            this.goods.push(good);
        }
        this.renderCart();
    },
    renderCart() {
        if (this.goods.length != 0) {
            this.cartButtonBuy.disabled = false;
            this.cartElement.textContent = '';
            this.cartStatus.textContent = '';
            for (good of this.goods) {
                this.cartElement.insertAdjacentHTML('afterbegin', this.cartGood.render(good));
            }
            this.cartStatus.insertAdjacentHTML('afterbegin', `В корзине ${this.addAllQuanity()} товаров на сумму ${this.addAllSumm()} р.`);
        } else {
            this.cartButtonBuy.disabled = true;
            this.cartElement.textContent = "";
            this.cartStatus.textContent = 'Корзина пуста';
        }
    }
}

const goods = {
    goods: [
        {
            id: 01,
            name: 'One',
            price: 10,
            quanity: 1
        },
        {
            id: 02,
            name: 'Two',
            price: 10,
            quanity: 1
        },
        {
            id: 03,
            name: 'Three',
            price: 10,
            quanity: 1
        },
        {
            id: 04,
            name: 'Four',
            price: 10,
            quanity: 1
        }
    ],
    goodInGoods,
    addToCart,
    render() {
        for (let good of this.goods) {
            this.cartInGoodsElement.insertAdjacentHTML('afterbegin', this.goodInGoods.render(good));
        }
        document.querySelector('.goods').addEventListener('click', (event) => {
            this.goodsClickHandler(event)
        })
    },
    goodsClickHandler(event) {
        if (event.target.tagName !== 'BUTTON') return;
        let goodID = event.target.parentNode.dataset.id;
        this.addToCartInternalFunc(goodID);
    },
    init() {
        this.cartInGoodsElement = document.getElementById('goods');
        this.render();
    },
    addToCartInternalFunc(goodID) {
        let good = this.goods.find(good => good.id === +goodID);
        this.addToCart.add(good);
    }
}

goods.init();
cart1 = cart;
cart1.init()