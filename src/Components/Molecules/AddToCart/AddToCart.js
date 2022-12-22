import React, {useState} from 'react'
import Cart from "../../Atoms/Cart/Cart"
import Plus from "../../Atoms/Plus/Plus"
import Minus from "../../Atoms/Minus/Minus"
import "./AddToCart.scss"

const AddToCart = () => {
  const [amount, setAmout] = useState(0)

  const handleIncrease = () => {
    setAmout((prevAmount)=>{
      if (prevAmount === 10)  return prevAmount
      
      return prevAmount+1
    }
    )
  }

  const handleDecrease = () => {
    setAmout((prevAmount)=>{
      if (prevAmount === 0)  return prevAmount

      return prevAmount-1
    }
    )
  }

  return (
    <div className='add-cart'>
      <div className='add-cart__amount-wrapper'>
        <div className='add-cart__changer' onClick={handleDecrease} >
          <Minus/>
        </div>
        <span className='add-cart__amount'>{amount}</span>
        <div className='add-cart__changer' onClick={handleIncrease}>
          <Plus/>
        </div>
      </div>
      <button className='add-cart__btn'>
        <span className='add-cart__cart'>
          <Cart color={"white"}/>
        </span>
        Add to cart
      </button>
    </div>
  )
}

export default AddToCart