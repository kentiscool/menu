import React from 'react';
import { Button, Flex, Heading, Separator, Text, TextArea } from '@radix-ui/themes';

import GenericSection from '../../../components/genericSection';
import NumberStepper from '../../../components/numberStepper';

import { Item } from '../../../models'

import styles from './OrderForm.module.css'
import '../../../index.css'

interface OrderFormProps {
    item: Item;
    onSubmit: (item: Item, quantity: number, preference: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ item, onSubmit }) => {
    const [quantity, setQuantity] = React.useState(1);
    const [preference, setPreference] = React.useState("")

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => prev - 1);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(item, quantity, preference)
        }}>
            <Flex className={`${styles.container} background`}>
                <img src={item?.imageUrl} className={styles.image}/>
                <GenericSection className={styles.header_section}>
                    <Flex direction="column" m="0">
                        <Heading>{item?.name}</Heading>
                        <Text color='gray' className='secondary_text'>{item?.description}</Text>
                    </Flex>
                </GenericSection>
                
                <GenericSection separated className={styles.preference_section}>
                    <Flex direction="column">
                        <Text weight="bold">Preferences</Text>
                        <Text color='gray' weight='bold' size='1'>Optional</Text>
                        <TextArea onChange={e => setPreference(e.target.value)} placeholder="Reply to comment…" autoFocus={false} tabIndex={-1}/>
                        <Separator orientation="horizontal" size="4"/>
                    </Flex>
                </GenericSection>

                <GenericSection className={styles.quantity_section}>
                    <NumberStepper
                        value={quantity}
                        onIncrement={increment}
                        onDecrement={decrement}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                </GenericSection>
            </Flex>

            <GenericSection className={styles.submit_section}>
                <Button className={styles.submit_button} tabIndex={-1}>
                    <Text>Add To Order</Text>
                    <Text>{item?.price}</Text>
                </Button>
            </GenericSection>
        </form>
    )
}

export default OrderForm