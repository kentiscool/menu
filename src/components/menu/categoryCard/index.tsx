import * as React from 'react'

import { type Category } from '../../../models'

import GenericContainer from '../../common/genericContainer'

import styles from './CategoryCard.module.css'

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <GenericContainer className={styles.container}>
      <img src={category.imageUrl} className={styles.image} />
      <h2 className={styles.title}>{category.name}</h2>
    </GenericContainer>
  )
}

export default CategoryCard
