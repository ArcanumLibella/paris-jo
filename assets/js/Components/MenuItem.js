import React from 'react'

const MenuItem = (props) => {
  return (
    <div className={'menu__item ' + props.text} >
      <div className='menu__icon'></div>
      <h3 className='menu__title'>{props.text}</h3>
    </div >
  )
}

export default MenuItem