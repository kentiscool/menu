import * as React from 'react'
import styles from './HorizontalItemCard.module.css'
import '../../../index.css'

import { Flex } from '@radix-ui/themes'

import GenericContainer from '../../common/genericContainer'

import type Item from '../../../models/Item'

type Props = {
  item: Item
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
} & React.HTMLAttributes<HTMLDivElement>

const HorizontalItemCard: React.FC<Props> = ({ item, className, onClick }) => {
  return (
        <GenericContainer>
            <Flex direction="row" justify="between" className={`${styles.container} ${className}`} onClick={onClick}>
                <Flex direction="column" justify="center" className={styles.info_container}>
                    <h2 className={styles.title}>{item.name}</h2>
                    <h3 className={styles.description}>{item.description}</h3>
                    <h3>{item.price}</h3>
                </Flex>
                <img src={item.imageUrl} className={styles.image}/>
            </Flex>
        </GenericContainer>
  )
}

export default HorizontalItemCard
