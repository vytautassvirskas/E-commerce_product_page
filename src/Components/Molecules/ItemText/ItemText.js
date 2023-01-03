import React from 'react'
import ItemDescrp from '../../Atoms/ItemDescrp/ItemDescrp'
import ItemTitle from '../../Atoms/ItemTitle/ItemTitle'
import MakerTitle from '../../Atoms/MakerTitle/MakerTitle'
import "./ItemText.scss"

const ItemText = ({data}) => {
  return (
    <div className='item-text-wrapper'>
        <MakerTitle company={data.company}/>
        <ItemTitle title={data.title}/>
        <ItemDescrp description={data.description}/>
    </div>
  )
}

export default ItemText