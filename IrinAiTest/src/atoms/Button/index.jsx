import React from 'react'

const Button = ({label, ...props}) => {
  return (
    <button className='button cursor' {...props} >{label} </button>
  )
}

export default Button
