// https://medium.com/geekculture/implementing-a-type-safe-object-builder-in-typescript-e973f5ecfb9c
import Category from './Category'
import Item from './Item'
import Cart from './Cart'
import Order from './Order'

class GenericBuilder {
  public static new<Target>(): ISet<Target, {}> {
    return new Builder<Target, {}>({})
  }
}

interface ISet<Target, Supplied> {
  set: <T extends Omit<Target, keyof Supplied>, K extends keyof T>(
    key: K,
    value: T[K],
  ) => keyof Omit<Omit<Target, keyof Supplied>, K> extends never
    ? IBuild<Target>
    : ISet<Target, Supplied & Pick<T, K>>
}

interface IBuild<Target> {
  build: () => Target
}

class Builder<Target, Supplied> implements IBuild<Target>, ISet<Target, Supplied> {
  constructor (private readonly target: Partial<Target>) {}

  set<T extends Omit<Target, keyof Supplied>, K extends keyof T>(key: K, value: T[K]) {
    const target: Partial<Target> = { ...this.target, [key]: value }

    return new Builder<Target, Supplied & Pick<T, K>>(target)
  }

  build () {
    return this.target as Target
  }
}

export { GenericBuilder, Category, Item, Cart, Order }
