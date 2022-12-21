import React from 'react';
import CurrentPrice from '../../Atoms/CurrentPrice/CurrentPrice';
import Discount from '../../Atoms/Discount/Discount';
import LastPrice from '../../Atoms/LastPrice/LastPrice';
import "./ItemPrice.scss";

const ItemPrice = () => {
  return (
    <div className='item-price-wrapper'>
      <div className='item-price-wrapper__price'>
        <CurrentPrice/>
        <Discount/>
      </div>
    <LastPrice/>
    </div>
  )
}

export default ItemPrice