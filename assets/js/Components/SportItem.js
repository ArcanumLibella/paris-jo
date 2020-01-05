import React from 'react'

const SportItem = (props) => {
  return (
    <div className='menu__item sport' >
      <div
        className='sport__icon'
        style={{ backgroundColor: props.color }}></div>
      <h3 className='sport__title'>{props.sportName}</h3>
    </div >
  )
}

export default SportItem