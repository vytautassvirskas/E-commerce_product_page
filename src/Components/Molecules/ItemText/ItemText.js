import React from 'react'
import ItemDescrp from '../../Atoms/ItemDescrp/ItemDescrp'
import ItemTitle from '../../Atoms/ItemTitle/ItemTitle'
import MakerTitle from '../../Atoms/MakerTitle/MakerTitle'
import "./ItemText.scss"

const ItemText = () => {
  return (
    <div className='item-text-wrapper'>
        <MakerTitle/>
        <ItemTitle/>
        <ItemDescrp/>
    </div>
  )
}

export default ItemText