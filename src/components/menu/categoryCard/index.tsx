import * as React from 'react';
import styles from './CategoryCard.module.css'

import { Text } from '@radix-ui/themes';

import { Category } from '../../../models';

import GenericContainer from '../../common/genericContainer';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
    return (
        <GenericContainer className={styles.container}>
            <img src={category.imageUrl} className={styles.image}/>
            <h2 className={styles.title}>{category.name}</h2>
        </GenericContainer>
    )
}

export default CategoryCard