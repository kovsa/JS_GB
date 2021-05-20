/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

const basket = {
    GoodsArr: [],
    putProduct(item, amount) {
        item.amount = amount;
        this.GoodsArr.push(item)
    },

    basketSumm() {
        var fullSumm = 0;
        for (good of this.GoodsArr) {
            fullSumm += good.price * good.amount
        }
        return fullSumm
    }
}

function createProduct(name, price) {
    const product = {
        name: name,
        price: price
    }
    return product
}

product1 = createProduct("One", 10);
product2 = createProduct("Two", 10);
product3 = createProduct("Three", 10);
product4 = createProduct("Four", 10);
basket.putProduct(product1, 5);
basket.putProduct(product2, 5);
basket.putProduct(product3, 5);
basket.putProduct(product4, 5);

console.log(basket.basketSumm())
