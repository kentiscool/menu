// https://kentcdodds.com/blog/how-to-use-react-context-effectively
import * as React from 'react'

import { type Cart, GenericBuilder, type Order } from '../models'

const LOCAL_STORAGE_KEY = 'cartState'
const emptyCart: Cart = GenericBuilder.new<Cart>().set('orders', []).build()

interface Props {
  children?: React.ReactNode
}
type Action = AddItemAction | RemoveItemAction
type Dispatch = (action: Action) => void

const CartContext = React.createContext<
{ state: Cart, dispatch: Dispatch } | undefined
>(undefined)

function CartReducer (state: Cart, action: Action): Cart {
  // state:  provided by React
  // action: passed in by Consumer via dispatch
  return action._reduce(state)
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const initialState: Cart = React.useMemo(() => {
    const rawValue = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (rawValue == null) {
      return emptyCart
    }

    // Invalidate data older than 4 hours
    // Typescript doesn't perform typechecking at runtime and versioning is hard :p
    const parsedValue = JSON.parse(rawValue)
    if (new Date().getTime() - parsedValue.timeStamp > 1000 * 60 * 60 * 4) {
      return emptyCart
    }

    return parsedValue.state
  }, [])

  const [state, dispatch] = React.useReducer<React.Reducer<Cart, Action>>(
    CartReducer,
    initialState
  )
  const value = { state, dispatch }

  React.useEffect(() => {
    // Retains state even when the component is unmounted (refresh, back, etc)
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        state,
        timestamp: new Date().getTime()
      })
    )
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart (): any {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

class AddItemAction {
  order: Order

  constructor (order: Order) {
    this.order = order
  }

  _reduce (cart: Cart): Cart {
    let foundMatchingOrder = false
    const newOrders = cart.orders.map((order) => {
      if (
        order.item === this.order.item &&
        order.preference === this.order.preference
      ) {
        foundMatchingOrder = true
        order.quantity += this.order.quantity
      }
      return order
    })

    if (!foundMatchingOrder) {
      newOrders.push(this.order)
    }

    return GenericBuilder.new<Cart>().set('orders', newOrders).build()
  }
}

class RemoveItemAction {
  order: Order

  constructor (order: Order) {
    this.order = order
  }

  _reduce (cart: Cart): Cart {
    const newOrders: Order[] = cart.orders
      .map((order) => {
        if (
          order.item === this.order.item &&
          order.preference === this.order.preference
        ) {
          order.quantity -= this.order.quantity
        }
        return order.quantity > 0 ? order : null
      })
      .filter(isNotNullOrUndefined)

    return GenericBuilder.new<Cart>().set('orders', newOrders).build()
  }
}

function isNotNullOrUndefined<T> (value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export { AddItemAction, CartProvider, RemoveItemAction, useCart }
