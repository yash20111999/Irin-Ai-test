import React from 'react'

const InputField = ({label, ...props}) => {
  return (
    <div className='input-container'>
      <span className='content-text'>{label}</span>
      <input className='input' {...props} />
    </div>
  )
}

export default InputField;

