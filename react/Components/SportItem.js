import React, { useState } from 'react'

const SportItem = (props) => {
  const [isSelected, setIsSelected] = useState('false')

  const handleSportDisplay = event => {
    setIsSelected(!isSelected)
    console.log(isSelected)
  }

  return (
    <div 
      className={ isSelected ? "menu__item menu__item--sport" : "menu__item menu__item--sport is-selected" } 
      onClick={(event) => handleSportDisplay(event)}>
      <div
        className='menu__icon'
        style={{ backgroundColor: props.color }}>
      </div>
      <p className='menu__title menu-subtitle'>{props.sportName}</p>
    </div >
  )
}

export default SportItem