import React from 'react';
import AddToCart from '../../Molecules/AddToCart/AddToCart';
import ItemPrice from '../../Molecules/ItemPrice/ItemPrice';
import ItemText from '../../Molecules/ItemText/ItemText';
import "./ItemSection.scss"

const ItemSection = () => {
  return (
    <section className='item-section'>
        <ItemText/>
        <ItemPrice/>
        <AddToCart/>
    </section>
  )
}

export default ItemSection