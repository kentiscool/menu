import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cross1Icon } from '@radix-ui/react-icons'
import { Flex, IconButton } from '@radix-ui/themes'

import { GenericBuilder, type Item, type Order } from '../../models'

import HorizontalOrderCard from '../../components/cart/horizontalOrderCard'

import styles from './CartPage.module.css'

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const orders = getOrders()

  return (
    <Flex direction="column">
      <IconButton
        className={styles.exit_button}
        onClick={() => {
          navigate('/')
        }}
      >
        <Cross1Icon className={styles.exit_icon} height="1rem" width="1rem" />
      </IconButton>
      <div className={styles.order_list}>
        {orders.map((e: Order) => (
          <HorizontalOrderCard order={e} key={e.id} />
        ))}
      </div>
    </Flex>
  )
}

function getOrders (): Order[] {
  const item: Item = GenericBuilder.new<Item>()
    .set('id', 'item1')
    .set('price', 100)
    .set('name', 'Kucing Goreng Saus Padang asdasdasdasdasdasdasdasdas asds')
    .set('description', 'Solid option')
    .set('imageUrl', 'https://placekitten.com/500/500')
    .build()

  return [
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build(),
    GenericBuilder.new<Order>()
      .set('id', 'asdasd')
      .set('item', item)
      .set('preference', 'asdad')
      .set('quantity', 10)
      .build()
  ]
}

export default CartPage
