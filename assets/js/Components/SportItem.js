import React from 'react'

const SportItem = (props) => {
  return (
    <div className='menu__item menu__item--sport' >
      <div
        className='menu__icon'
        style={{ backgroundColor: props.color }}></div>
      <p className='menu__title menu-subtitle'>{props.sportName}</p>
    </div >
  )
}

export default SportItem