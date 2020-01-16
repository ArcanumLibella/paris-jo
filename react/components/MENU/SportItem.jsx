import React from "react";

const SportItem = ({ sportItem, /* setItemSelected, */ selected }) => {
  // Déclaration des states
  const [isSelected, setIsSelected] = React.useState(selected)

  // Déclaration d'une fonction eventListener
  const handleSportDisplay = () => {
    setIsSelected(!isSelected)
    // setItemSelected(sportItem.id)
  }


  return (
    <li
      className={isSelected ? "menu__item menu__item--sport is-selected" : "menu__item menu__item--sport"}
      onClick={() => handleSportDisplay()}>
      <div
        className='menu__icon'
        style={{ backgroundColor: sportItem.color }}>
      </div>
      <p className='menu__title menu-subtitle'>{sportItem.sportName}</p>
    </li >
  )
}

export default SportItem