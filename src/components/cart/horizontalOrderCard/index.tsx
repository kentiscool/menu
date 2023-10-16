import React from 'react'

import { type Order } from '../../../models'

import GenericContainer from '../../common/genericContainer'
import NumberStepper from '../../common/numberStepper'

import '../../../index.css'
import styles from './HorizontalOrderCard.module.css'

interface props {
  order: Order
}

const HorizontalOrderCard: React.FC<props> = ({ order }) => {
  return (
    <GenericContainer className={styles.order_card}>
      <div className={styles.image_container}>
        <img className={styles.image} src={order.item.imageUrl} />
      </div>

      <div className={styles.text_container}>
        <h2 className={styles.title}>{order.item.name}</h2>
        <h3 className={styles.description}>{order.item.description}</h3>
        <h3 className={styles.price}>{order.item.price}</h3>
      </div>

      <div className={styles.quantity_container}>
        <NumberStepper
          className={styles.number_stepper}
          value={0}
          onIncrement={() => {}}
          onDecrement={() => {}}
          onChange={() => {}}
        />
      </div>
    </GenericContainer>
  )
}

export default HorizontalOrderCard
