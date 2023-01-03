import React from 'react'
import "./ItemTitle.scss"

const ItemTitle = ({title}) => {
  return (
    <h1 className='item-title'>{title}</h1>
  )
}

export default ItemTitle