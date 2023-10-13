import React from 'react';
import { Button, Flex } from '@radix-ui/themes';

import styles from './NumberStepper.module.css'

type Props = {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const NumberStepper: React.FC<Props> = ({ value, onIncrement, onDecrement, onChange, className }) => {
    return (
        <Flex className={`${styles.container} ${className}`}>
            <Button className={styles.decrement_button} tabIndex={-1} type="button" onClick={onDecrement} aria-label="Decrement value">
                <span className={styles.icon}>-</span>
            </Button>
            <input
                tabIndex={-1}
                id="numberInput"
                className={styles.number_input}
                type="number"
                value={value}
                onChange={onChange}
            />
            <Button className={styles.increment_button} tabIndex={-1} type="button" onClick={onIncrement} aria-label="Increment value">
                <span className={styles.icon}>+</span>
            </Button>
        </Flex>
    );
}

export default NumberStepper;
