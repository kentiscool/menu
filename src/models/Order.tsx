import type Item from "./Item";

export default class Order {
  id!: string;
  item!: Item;
  quantity!: number;
  preference!: string;
}
