'use srict';

function Hamburger(size) {
    this.money = size.money;
    this.calorie = size.calorie;
}

Hamburger.SIZE.SMALL = {
    money: 20,
    calorie: 40,
};

Hamburger.SIZE.MIDDLE = {
    money: 60,
    calorie: 80,
};

Hamburger.SIZE.BIG = {
    money: 100,
    calorie: 120,
};

Hamburger.TOPPING_CHEESE = {
    money: 5,
    calorie: 20,
};

Hamburger.TOPPING_SALAD = {
    money: 8,
    calorie: 10,
};

Hamburger.TOPPING_POTATO = {
    money: 10,
    calorie: 15,
};

Hamburger.TOPPING_SPICY = {
    money: 12,
    calorie: 25,
};

Hamburger.prototype.getPrice = function (topping) {
    this.money += topping.money;
    this.calorie += topping.calorie;
};

Hamburger.prototype.getPrice = function () {
    return this.money;
};

Hamburger.prototype.getPrice = function () {
    return this.calorie;
};

export default Hamburger;