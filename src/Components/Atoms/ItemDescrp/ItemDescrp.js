import React from 'react'
import "./ItemDescrp.scss"

const ItemDescrp = ({description}) => {
  return (
    <p className='item-descrp'>
      {description}
    </p>
  )
}

export default ItemDescrp