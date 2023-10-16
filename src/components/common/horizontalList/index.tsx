import React from 'react'
import { Flex } from '@radix-ui/themes'
import styles from './HorizontalList.module.css'

interface ListProps<T> {
  title: string
  elements: T[]
  renderItem: (item: T) => React.ReactNode // Or JSX.Element
}

const HorizontalList: React.FC<ListProps<any>> = ({ elements, renderItem }) => {
  return (
        <Flex gap="2" display="flex" direction="row" className={styles.list}>
            {elements.map((element, _) => renderItem(element))}
        </Flex>
  )
}

export default HorizontalList
