import { Item } from './item';

export class Shop {
  private items: Item[];

  constructor() {
    this.items = [
      new Item('Bullet Bill', 25, 1),
      new Item('Banana Peel', 15, 1),
      new Item('Blue Shell', 40, 1),
      new Item('Star Power', 35, 1),
    ];
  }

  getItems(): Item[] {
    return this.items;
  }
}
