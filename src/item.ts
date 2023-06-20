import { v4 as uuidv4 } from 'uuid';

export class Item {
  private id: string;
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
