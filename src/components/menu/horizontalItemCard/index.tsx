import * as React from 'react';
import styles from './HorizontalItemCard.module.css'
import '../../../index.css'
import { Flex, Text } from '@radix-ui/themes';

import GenericContainer from '../../common/genericContainer';

import Item from '../../../models/Item';

type Props = {
    item: Item;
    className?: string
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;    
} & React.HTMLAttributes<HTMLDivElement>;

const HorizontalItemCard: React.FC<Props> = ({ item, className, onClick }) => {
    return (
        <GenericContainer>
            <Flex direction="row" justify="between" className={`${styles.container} ${className}`} onClick={onClick}>
                <Flex direction="column" justify="center" className={styles.info_container}>
                    <Text as="div" className={`${styles.title} small_heading`}>
                        {item.name}
                    </Text>
                    <Text as="div" color="gray" className={`${styles.description} secondary_text`}>
                        {item.description}
                    </Text>
                    <Text color="gray" className={`${styles.price} secondary_text`}>
                        {item.price}
                    </Text>
                </Flex>
                <img src={item.imageUrl} className={styles.image}/>
            </Flex>
        </GenericContainer>
    )
}

export default HorizontalItemCard;