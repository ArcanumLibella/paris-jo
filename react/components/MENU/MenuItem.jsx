import React, { useState } from 'react'
// import 'svgxuse'
// require '../../public/assets/icons/symbol-defs.svg'

const MenuItem = (props) => {
  const [isClicked, setIsClicked] = useState("false")

  const handleSportDisplay = event => {
    setIsClicked(!isClicked)
    console.log(isClicked);
  }

  return (
    <div
      className={isClicked ? "menu__item" : "menu__item is-clicked"}
      onClick={(event) => handleSportDisplay(event)}>
      <div className='menu__icon'>
        <svg className={'icon icon-' + props.label}>
          <use xlinkHref={'#icon-' + props.label}></use>
        </svg>
      </div>
      <p className='menu__title menu-title'>{props.label}</p>
    </div >
  )
}

export default MenuItem