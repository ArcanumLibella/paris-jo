import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='menu__item'>
      <div className='menu__icon'></div>
      <p className='menu__title menu-title'>{props.text}</p>
    </div >
  )
}

export default MenuItem