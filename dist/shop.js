import { Item } from './item';
var Shop = /** @class */ (function () {
    function Shop() {
        this.items = [
            new Item('Bullet Bill', 25, 1),
            new Item('Banana Peel', 15, 1),
            new Item('Blue Shell', 40, 1),
            new Item('Star Power', 35, 1),
        ];
    }
    Shop.prototype.getItems = function () {
        return this.items;
    };
    return Shop;
}());
export { Shop };
