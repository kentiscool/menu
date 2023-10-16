import * as React from 'react'
import { Box, Flex } from '@radix-ui/themes'

import { type Item } from '../../../models'

import GenericContainer from '../../common/genericContainer'

import '../../../index.css'
import styles from './VerticalItemCard.module.css'

type Props = {
  item: Item
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
} & React.HTMLAttributes<HTMLDivElement> // This allows for the spreading of standard div attributes

const VerticalItemCard: React.FC<Props> = ({ item, onClick, ...props }) => {
  return (
    <GenericContainer className={`${styles.container}`} {...props}>
      <Flex direction="column" onClick={onClick}>
        <img src={item.imageUrl} className={`${styles.image}`} />
        <Box className={`${styles.info_container}`}>
          <h2 className={styles.title}>{item.name}</h2>
          <h3 className={styles.price}>{item.price}</h3>
        </Box>
      </Flex>
    </GenericContainer>
  )
}

export default VerticalItemCard
