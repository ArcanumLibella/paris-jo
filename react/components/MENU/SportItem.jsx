import React from "react";

const SportItem = ({ sportItem, /* setItemSelected, */ selected }) => {
  // Déstructuration des props
  const { color, sportCategory } = sportItem 

  // Déclaration des states
  const [isSelected, setIsSelected] = React.useState(selected)

  // Déclaration d'une fonction eventListener
  const handleSportDisplay = () => {
    setIsSelected(!isSelected)
    // setItemSelected(sportItem.id)
  }


  return (
    <li
      className={ 
        isSelected 
        ? "menu__item menu__item--sport is-selected" 
        : "menu__item menu__item--sport"
      }
      onClick={() => handleSportDisplay()}>
      <div
        className='menu__icon'
        style={{ backgroundColor: color }}>
          <svg className={'icon icon-' + sportCategory}>
            <use xlinkHref={'#icon-' + sportCategory}></use>
          </svg>
      </div>
      <p className='menu__title menu-subtitle'>{ sportCategory }</p>
      
      <ul className='menu__dropdown dropdown'>
        <li className='dropdown__item dropdown-item'>Sport 1</li>
        <li className='dropdown__item dropdown-item'>Sport 2</li>
        <li className='dropdown__item dropdown-item'>Sport 3</li>
      </ul>
    </li >
  )
}

export default SportItem