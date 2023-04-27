import React, { useContext } from 'react';
import { Button,InputField } from '../../atoms';
import { DataContext } from '../../DataContext';

const ItemFrom = () => {
  
  const { setItem, item, handleClear, handleSubmit } = useContext(DataContext);
  
  return (
    <div className='form-container'>
      <span className='content-header'>Enter User Details</span>
      <div className='field-container'>
        <InputField label='Name' value={item.name} onChange={(e) => {setItem({...item, name: e.target.value}) }} />
        <InputField label='Email' value={item.email} onChange={(e) => {setItem({...item, email: e.target.value}) }}/>
      </div>
      <div className='button-container'>
        <Button label='Submit' onClick={handleSubmit} />
        <Button label='Clear' onClick={handleClear} />
      </div>
    </div>
  )
}

export default ItemFrom
