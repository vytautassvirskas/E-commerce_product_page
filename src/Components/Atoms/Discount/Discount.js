import React from 'react';
import "./Discount.scss"

const Discount = ({discount}) => {
  return (
    <span className='discount'>{discount}&#37;</span>
  )
}

export default Discount;