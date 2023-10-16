import React from 'react'
import { Button, Flex, Separator, TextArea } from '@radix-ui/themes'

import { type Item } from '../../../models'

import GenericSection from '../../../components/common/genericSection'
import NumberStepper from '../../../components/common/numberStepper'

import '../../../index.css'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  item: Item
  onSubmit: (item: Item, quantity: number, preference: string) => void
}

const OrderForm: React.FC<OrderFormProps> = ({ item, onSubmit }) => {
  const [quantity, setQuantity] = React.useState(1)
  const [preference, setPreference] = React.useState('')

  const increment = (): void => {
    setQuantity((prev) => prev + 1)
  }
  const decrement = (): void => {
    setQuantity((prev) => prev - 1)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(item, quantity, preference)
      }}
    >
      <Flex className={`${styles.container} background`}>
        <img src={item?.imageUrl} className={styles.image} />
        <GenericSection className={styles.header_section}>
          <Flex direction="column" m="0">
            <h1 className={styles.title}>{item?.name}</h1>
            <h3>{item?.description}</h3>
          </Flex>
        </GenericSection>

        <GenericSection separated className={styles.preference_section}>
          <Flex direction="column">
            <h2>Preferences</h2>
            <h3>Optional</h3>
            <TextArea
              onChange={(e) => {
                setPreference(e.target.value)
              }}
              placeholder="Reply to comment…"
              autoFocus={false}
              tabIndex={-1}
            />
            <Separator orientation="horizontal" size="4" />
          </Flex>
        </GenericSection>

        <GenericSection className={styles.quantity_section}>
          <NumberStepper
            value={quantity}
            onIncrement={increment}
            onDecrement={decrement}
            onChange={(e) => {
              setQuantity(Number(e.target.value))
            }}
          />
        </GenericSection>
      </Flex>

      <GenericSection className={styles.submit_section}>
        <Button className={styles.submit_button} tabIndex={-1}>
          <h2>Add To Order</h2>
          <h2>{item?.price}</h2>
        </Button>
      </GenericSection>
    </form>
  )
}

export default OrderForm
