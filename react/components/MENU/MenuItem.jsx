import React, { useState } from 'react'

// COMPONENTS
import { Home, Sports, Infos } from '../../../public/assets/icons/all-icons'



const MenuItem = (props) => {
  const { label } = props

  // Function to handle menu icons
  const handleIconsMenu = (label) => {
    if (label === 'home') {
      return <Home/>
    } else if (label === 'sports') {
      return <Sports/>
    } else if (label === 'infos') {
      return <Infos/>
    }
  }

  return (
    <div className='menu__item'>
      <div className='menu__icon'>
        {handleIconsMenu(label)}
      </div>
      <p className='menu__title menu-title'>{props.label}</p>
    </div >
  )
}

export default MenuItem