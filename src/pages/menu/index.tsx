import React, { forwardRef, type ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger
} from '@radix-ui/react-dialog'
import { Button, Flex } from '@radix-ui/themes'

import {
  type Category,
  GenericBuilder,
  type Item,
  type Order
} from '../../models'

import GenericSection from '../../components/common/genericSection'
import HorizontalList from '../../components/common/horizontalList'
import CategoryCard from '../../components/menu/categoryCard'
import HorizontalItemCard from '../../components/menu/horizontalItemCard'
import VerticalItemCard from '../../components/menu/verticalItemCard'
import { AddItemAction, useCart } from '../../contexts/Cart'

import OrderForm from './orderForm'

import '../../index.css'
import styles from './MenuPage.module.css'

const MenuPage: React.FC = () => {
  const { state, dispatch } = useCart()
  const featuredItems: Item[] = getItems()
  const categories: Category[] = getCategories()
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null)
  return (
    <Dialog>
      <Flex direction="column" gap="2" className={`${styles.menu} background`}>
        <div>
          <GenericSection>
            <h1>Featured Items</h1>
          </GenericSection>
          <GenericSection
            className={styles.featured_section}
            horizontallyPadded={false}
          >
            <HorizontalList
              title="Featured Items"
              elements={featuredItems}
              renderItem={(e: Item) => (
                <DialogTrigger asChild key={e.id}>
                  <RefForwardingWrapper>
                    <VerticalItemCard
                      item={e}
                      onClick={(_) => {
                        setSelectedItem(e)
                      }}
                    />
                  </RefForwardingWrapper>
                </DialogTrigger>
              )}
            />
          </GenericSection>
        </div>

        <div>
          <GenericSection className={styles.catagories_header}>
            <h1>Categories</h1>
          </GenericSection>

          <GenericSection
            horizontallyPadded={false}
            className={styles.catagories_section}
          >
            <HorizontalList
              title="Categories"
              elements={categories}
              renderItem={(e: Category) => (
                <CategoryCard key={e.id} category={e} />
              )}
            />
          </GenericSection>
        </div>

        <div>
          <GenericSection className={styles.full_menu_header}>
            <h1>Full Menu</h1>
          </GenericSection>

          <GenericSection>
            {featuredItems.map((e: Item) => (
              <DialogTrigger asChild key={e.id}>
                <RefForwardingWrapper>
                  <HorizontalItemCard
                    item={e}
                    onClick={(_) => {
                      setSelectedItem(e)
                    }}
                  />
                </RefForwardingWrapper>
              </DialogTrigger>
            ))}
          </GenericSection>
        </div>
      </Flex>

      {state.orders.length > 0 && (
        <Button className={styles.continue_button}>Continue</Button>
      )}

      <DialogOverlay className={styles.dialog_overlay}>
        <DialogContent className={''}>
          {selectedItem !== null && (
            <OrderForm
              item={selectedItem}
              onSubmit={(item, quantity, preference) => {
                dispatch(
                  new AddItemAction(
                    GenericBuilder.new<Order>()
                      .set('id', 'asdasd')
                      .set('item', item)
                      .set('quantity', quantity)
                      .set('preference', preference)
                      .build()
                  )
                )
              }}
            />
          )}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

interface RefForwardingWrapperProps {
  children: ReactNode
  [key: string]: any
}

const RefForwardingWrapper = forwardRef<
HTMLDivElement,
RefForwardingWrapperProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})
RefForwardingWrapper.displayName = 'ForwardedHorizontalItemCard' // eslint is will complain if this is not present

function getItems (): Item[] {
  const items: Item[] = []

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item1')
      .set('price', 100)
      .set('name', 'Kucing Goreng Saus Padang asdasdasdasdasdasdasdasdas asds')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/500')
      .build()
  )

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item2')
      .set('price', 100)
      .set('name', 'Item 2')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/501')
      .build()
  )

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item3')
      .set('price', 100)
      .set('name', 'Item 2')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/502')
      .build()
  )

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item4')
      .set('price', 100)
      .set('name', 'Item 2')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/503')
      .build()
  )

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item5')
      .set('price', 100)
      .set('name', 'Item 2')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/504')
      .build()
  )

  items.push(
    GenericBuilder.new<Item>()
      .set('id', 'item6')
      .set('price', 100)
      .set('name', 'Item 2')
      .set('description', 'Solid option')
      .set('imageUrl', 'https://placekitten.com/500/505')
      .build()
  )

  return items
}

function getCategories (): Category[] {
  const categories: Category[] = []

  categories.push(
    GenericBuilder.new<Category>()
      .set('id', 'category 1')
      .set('name', 'entree')
      .set('description', 'nice')
      .set('imageUrl', 'https://placekitten.com/100/0')
      .set('itemIds', [])
      .build()
  )

  return categories
}

export default MenuPage
