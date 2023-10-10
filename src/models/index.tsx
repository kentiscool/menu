import Category from "./Category";
import Item from "./Item";
import Cart from './Cart';
import Order from './Order'

class GenericBuilder<T> {
    private obj: Partial<T> = {};

    build(): T {
        return { ...this.obj } as T;
    }

    set<K extends keyof T>(key: K, value: T[K]): this {
        this.obj[key] = value;
        return this;
    }
}

export {GenericBuilder, Category, Item, Cart, Order};