import React from 'react'
import Cart from "../../Atoms/Cart/Cart"
import Plus from "../../Atoms/Plus/Plus"
import Minus from "../../Atoms/Minus/Minus"
import "./AddToCart.scss"

const AddToCart = () => {

  return (
    <div className='add-cart'>
      <div className='add-cart__amount-wrapper'>
        <div className='add-cart__changer' >
          <Minus/>
        </div>
        <span className='add-cart__amount'>0</span>
        <div className='add-cart__changer' >
          <Plus/>
        </div>
      </div>
      <button className='add-cart__btn'>
        <span className='add-cart__cart'>
          <Cart/>
        </span>
        Add to cart
      </button>
    </div>
  )
}

export default AddToCart