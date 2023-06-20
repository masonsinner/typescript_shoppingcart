import { v4 as uuidv4 } from 'uuid';
var Item = /** @class */ (function () {
    function Item(name, price, quantity) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getQuantity = function () {
        return this.quantity;
    };
    Item.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Item;
}());
export { Item };
