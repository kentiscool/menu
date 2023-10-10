import Item from "./Item";

export default class Order {
    item!: Item;
    quantity!: number;
    preference!: string;
}