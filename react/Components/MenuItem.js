import React from 'react'
import 'svgxuse'
// require '../../public/assets/icons/symbol-defs.svg'

const MenuItem = (props) => {
  return (
    <div className='menu__item'>
      <div className='menu__icon'>
        <svg className={'icon icon-' + props.text}>
          <use xlinkHref={'#icon-' + props.text}></use>
        </svg>
      </div>
      <p className='menu__title menu-title'>{props.text}</p>
    </div >
  )
}

export default MenuItem