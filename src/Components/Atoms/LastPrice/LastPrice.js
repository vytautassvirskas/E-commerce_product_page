import React from 'react'
import "./LastPrice.scss"

const LastPrice = ({lastPrice}) => {
  return (
    <div className='last-price'>&#36;{lastPrice?.toFixed(2)}</div>
  )
}

export default LastPrice