import React, { forwardRef, ReactNode } from 'react';
import { Button, Flex, Heading } from '@radix-ui/themes';
import { Dialog, DialogTrigger, DialogOverlay, DialogContent } from '@radix-ui/react-dialog';

import OrderForm from './orderForm';
import GenericSection from '../../components/common/genericSection';
import HorizontalList from '../../components/common/horizontalList';
import CategoryCard from '../../components/menu/categoryCard';
import HorizontalItemCard from '../../components/menu/horizontalItemCard';
import VerticalItemCard from '../../components/menu/verticalItemCard';

import { GenericBuilder, Category, Item, Order } from '../../models'
import { AddItemAction, useCart } from '../../contexts/Cart';

import styles from './MenuPage.module.css'
import '../../index.css'

const MenuPage: React.FC = () => {
    const { state, dispatch } = useCart();
    const featuredItems: Item[] = getItems();
    const categories: Category[] = getCategories();
    const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
    return (
        <Dialog>
            <Flex direction='column' gap='2' className={`${styles.menu} background`}>
                <div>
                    <GenericSection>
                        <Heading size="5">Featured Items</Heading>
                    </GenericSection>
                    <GenericSection className={styles.featured_section} horizontallyPadded={false}>
                        <HorizontalList 
                            title='Featured Items'
                            elements={featuredItems}
                            renderItem={(e: Item) => 
                                <DialogTrigger asChild key={e.id}>
                                    <RefForwardingWrapper>
                                        <VerticalItemCard item={e} onClick={(_) => setSelectedItem(e)}/>
                                    </RefForwardingWrapper>
                                </DialogTrigger>
                            }/>
                    </GenericSection>
                </div>
                
                <div>
                    <GenericSection className={styles.catagories_header}>
                        <Heading size="5">Categories</Heading>
                    </GenericSection>
                    
                    <GenericSection horizontallyPadded={false} className={styles.catagories_section}>
                        <HorizontalList 
                            title='Categories'
                            elements={categories}
                            renderItem={(e: Category) => <CategoryCard key={e.id} category={e}/>}/>
                    </GenericSection>
                </div>

                <div>
                    <GenericSection className={styles.full_menu_header}>
                        <Heading size="5">Full Menu</Heading>
                    </GenericSection>

                    <GenericSection>
                        {featuredItems.map((e: Item) => 
                            <DialogTrigger asChild key={e.id}>
                                <RefForwardingWrapper>
                                    <HorizontalItemCard item={e} onClick={(_) => setSelectedItem(e)}/>
                                </RefForwardingWrapper>
                            </DialogTrigger>
                        )}
                    </GenericSection>
                </div>
            </Flex>

            {state.orders.length > 0 &&
                <Button className={styles.continue_button}>
                    Continue 
                </Button> 
            } 

            <DialogOverlay className={styles.dialog_overlay}>
                <DialogContent className={``}>
                    {selectedItem !== null && 
                        <OrderForm 
                            item={selectedItem} 
                            onSubmit={(item, quantity, preference) => dispatch(new AddItemAction(GenericBuilder.new<Order>()
                                    .set('item', item)
                                    .set('quantity', quantity)
                                    .set('preference', preference)
                                    .build()
                                ))
                            }/>
                    }
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
}

interface RefForwardingWrapperProps {
    children: ReactNode;
    [key: string]: any;
}
  
const RefForwardingWrapper = forwardRef<HTMLDivElement, RefForwardingWrapperProps>(
    ({ children, ...props }, ref) => {
        return (
        <div ref={ref} {...props}>
            {children}
        </div>
        );
    }
);

function getItems(): Item[] {
    let items: Item[] = [];

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item1')
        .set('price', 100)
        .set('name','Kucing Goreng Saus Padang asdasdasdasdasdasdasdasdas asds')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/500')
        .build()
    )

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item2')
        .set('price', 100)
        .set('name','Item 2')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/501')
        .build()
    )

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item3')
        .set('price', 100)
        .set('name','Item 2')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/502')
        .build()
    )

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item4')
        .set('price', 100)
        .set('name','Item 2')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/503')
        .build()
    )

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item5')
        .set('price', 100)
        .set('name','Item 2')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/504')
        .build()
    )

    items.push(GenericBuilder.new<Item>()
        .set('id', 'item6')
        .set('price', 100)
        .set('name','Item 2')
        .set('description','Solid option')
        .set('imageUrl','https://placekitten.com/500/505')
        .build()
    )

    return items;
}

function getCategories(): Category[] {
    let categories: Category[] = [];

    categories.push(GenericBuilder.new<Category>()
        .set('id', 'category 1')
        .set('name', 'entree')
        .set('description', 'nice')
        .set('imageUrl', 'https://placekitten.com/100/0')
        .set('itemIds', [])
        .build()
    )

    return categories;
}

export default MenuPage