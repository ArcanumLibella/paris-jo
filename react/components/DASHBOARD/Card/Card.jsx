import React from 'react'

// COMPONENTS
import CardCount from './CardCount.jsx'
import CardGraphic from './CardGraphic.jsx'
import BackCulture from './Back/BackCulture.jsx'
import BackHostel from './Back/BackHostel.jsx'
import BackRestaurant from './Back/BackRestaurant.jsx'
import BackNature from './Back/BackNature.jsx'
import { Food, Hostel, Monument, Tree } from '../../../../public/assets/icons/all-icons'



const Card = (props) => {
  const { type, text } = props

  // Function to handle card icon
  const handleCardIcon = (type) => {
    if (type === 'culture') {
      return <Monument />
    } else if (type === 'restaurant') {
      return <Food />
    } else if (type === 'hostel') {
      return <Hostel />
    } else if (type === 'nature') {
      return <Tree />
    }
  }

  // Function to check card type
  const handleCardBack = (type) => {
    if (type === 'culture') {
      return <BackCulture type={type} />
    } else if (type === 'restaurant') {
      return <BackRestaurant type={type} />
    } else if (type === 'hostel') {
      return <BackHostel type={type} />
    } else if (type === 'nature') {
      return <BackNature type={type} />
    }
  }

  return (
    <div className={'card card--' + type}>
      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{type}</h3>

        <div className='card-front__wrapper'>
          <CardCount text={text} />

          <div className='card-front__icon'>
            { handleCardIcon(type) }
          </div>

          <CardGraphic />
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>
        {handleCardBack(type)}
      </div>
    </div>
  )
}

export default Card