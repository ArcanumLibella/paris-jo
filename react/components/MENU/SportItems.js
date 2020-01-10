import React, { useState } from 'react'

// DATA
const sportsList = require('../../data/sportsList');



const SportItems = (props) => {
  // Déclaration des states
  const [isSelected, setIsSelected] = useState('false')

  // Déclaration d'une fonction eventListener
  const handleSportDisplay = () => {
    setIsSelected(!isSelected)
    console.log(isSelected)
  }

  // Map sur chaque sport de sportsList
  const sportItems = sportsList.sports.map((sportItem, index) => {
    return (
      <li 
        key={index}
        className={ isSelected ? "menu__item menu__item--sport" : "menu__item menu__item--sport is-selected" } 
        onClick={() => handleSportDisplay()}>
        <div
          className='menu__icon'
          style={{ backgroundColor: sportItem.color }}>
        </div>
        <p className='menu__title menu-subtitle'>{sportItem.sportName}</p>
      </li >
    )
  })

  return (
    <ul className='sports'>{ sportItems }</ul>
  )
}

export default SportItems