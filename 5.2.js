const cartGood = {
    render(good) {
        return `<div class="good">
                    <b>Наименование: ${good.name}</b>
                    <b>Цена: ${good.price}</b>
                    <b>Количество: ${good.quanity}</b>
                    <b>Стоимость: ${good.summ}</b>
                </div>`
    }
}

const cart = {
    cartElement: null,
    cartStatus: null,
    cartButton: null,
    cartGood,
    goods: [
        {
            name: 'One',
            price: 10,
            quanity: 5
        },
        {
            name: 'Two',
            price: 10,
            quanity: 5
        },
        {
            name: 'Three',
            price: 10,
            quanity: 5
        },
        {
            name: 'Four',
            price: 10,
            quanity: 5
        }
    ],
    addSummToGoods() {
        for (i of this.goods) {
            i.summ = i.price * i.quanity
        }
    },

    addAllSumm() {
        return this.goods.reduce((partial_sum, a) => partial_sum + a.price * a.quanity, 0);
    },

    init() {
        this.cartElement = document.getElementById('cart')
        this.cartStatus = document.getElementById('cart__status')
        this.cartButton = document.querySelector('#clear__btn')
        this.cartButton.addEventListener('click', this.clearCart.bind(this))
        this.renderCart()
    },
    clearCart() {
        this.goods = [];
        this.renderCart();
        
    },
    renderCart() {
        if (this.goods.length != 0) {
            this.addSummToGoods()
            for (good of this.goods) {
                this.cartElement.insertAdjacentHTML('afterbegin', this.cartGood.render(good));
            }
            this.cartStatus.insertAdjacentHTML('afterbegin', `В корзине: ${this.goods.length} товаров на сумму ${this.addAllSumm()} рублей`)
        } else {
            this.cartElement.textContent = ''
            this.cartStatus.textContent = 'Корзина пуста';
        }
    }
}


cart.init()

