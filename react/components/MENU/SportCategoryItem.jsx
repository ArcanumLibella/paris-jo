import React from "react";

// COMPONENTS
import SportItems from './SportItems'

const SportCategoryItem = ({ sportCategoryItem, /* setItemSelected, */ selected }) => {
  // Déstructuration des props
  const { color, sportCategory } = sportCategoryItem 

  // Déclaration des states
  const [isSelected, setIsSelected] = React.useState(selected)

  // Déclaration d'une fonction eventListener
  // const handleSportDisplay = () => {
  //   setIsSelected(!isSelected)
  //   // setItemSelected(sportItem.id)
  // }

  return (
    <li
      className="menu__item menu__item--sport"
      // onClick={() => handleSportDisplay()}
      >
      <div
        className='menu__icon'
        style={{ backgroundColor: color }}>
          <svg className={'icon icon-' + sportCategory}>
            <use xlinkHref={'#icon-' + sportCategory}></use>
          </svg>
      </div>
      <p className='menu__title menu-subtitle'>{ sportCategory }</p>
      
      <SportItems sportCategoryItem={ sportCategoryItem }/>

      {/* <ul className='menu__dropdown dropdown'>
        <li className='dropdown__item'>
          <input className='dropdown__checkbox' type="checkbox" id="sport1" name="sport1"></input>
          <label className='dropdown__label dropdown-label' htmlFor="sport1">
            <svg width="12px" height="12px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
            Sport 1
          </label>
        </li>
        <li className='dropdown__item'>
          <input className='dropdown__checkbox' type="checkbox" id="sport2" name="sport2"></input>
          <label className='dropdown__label dropdown-label' htmlFor="sport2">
            <svg width="12px" height="12px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
            Sport 2
          </label>
        </li>
        <li className='dropdown__item'>
          <input className='dropdown__checkbox' type="checkbox" id="sport3" name="sport3"></input>
          <label className='dropdown__label dropdown-label' htmlFor="sport3">
            <svg width="12px" height="12px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
            Sport 3
          </label>
        </li>
      </ul> */}
    </li >
  )
}

export default SportCategoryItem