import * as React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

import GenericContainer from '../../common/genericContainer';

import { Item } from '../../../models';

import styles from './VerticalItemCard.module.css'
import '../../../index.css'

type Props = {
  item: Item;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;  // This allows for the spreading of standard div attributes

const VerticalItemCard: React.FC<Props> = ({ item, onClick, ...props }) => {
  return (
    <GenericContainer className={`${styles.container}`} {...props}>
      <Flex direction="column" onClick={onClick}>
        <img src={item.imageUrl} className={`${styles.image}`}/>
        <Box className={`${styles.info_container}`}>
          <Text as="div" weight="bold" className={`${styles.title} small_heading`}>
            {item.name}
          </Text>
          <Text weight="bold" color="gray" className={`${styles.price} secondary_text`}>
            {item.price}
          </Text>
        </Box>
      </Flex>
    </GenericContainer>
  );
};

export default VerticalItemCard;