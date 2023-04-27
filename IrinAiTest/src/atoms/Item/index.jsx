import React from 'react'
import { SvgComponenet } from '../../assets'

const Item = ({item, setActivity, index}) => {
  return (
    <div className='item-container'>
      <span className='content-text'>{item.name}</span>
      <span className='content-text'>{item.email}</span>
      <div className='icon-container'>
        <SvgComponenet.EditIcon className='cursor' onClick={() => setActivity({
          id: index,
          operation: 1,
        })} />
        <SvgComponenet.DeleteIcon className='cursor'onClick={() => setActivity({
          id: index,
          operation: 2,
        })}/>
      </div>
    </div>
  )
}

export default Item
