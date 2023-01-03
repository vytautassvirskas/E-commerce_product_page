import React from 'react'
import "./CurrentPrice.scss"

const CurrentPrice = ({currentPrice}) => {
  return (
    <span className='current-price'>&#36;{currentPrice?.toFixed(2)}</span>
  )
}

export default CurrentPrice