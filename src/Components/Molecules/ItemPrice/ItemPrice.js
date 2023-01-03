import React from 'react';
import CurrentPrice from '../../Atoms/CurrentPrice/CurrentPrice';
import Discount from '../../Atoms/Discount/Discount';
import LastPrice from '../../Atoms/LastPrice/LastPrice';
import "./ItemPrice.scss";

const ItemPrice = ({data}) => {
  return (
    <div className='item-price-wrapper'>
      <div className='item-price-wrapper__price'>
        <CurrentPrice currentPrice = {data.currentPrice}/>
        <Discount discount = {data.discount}/>
      </div>
    <LastPrice lastPrice = {data.lastPrice}/>
    </div>
  )
}

export default ItemPrice