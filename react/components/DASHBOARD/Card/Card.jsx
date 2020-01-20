import React from 'react'

// COMPONENTS
import CardCount from './CardCount.jsx'
import CardGraphic from './CardGraphic.jsx'

const Card = (props) => {
  const { type, text } = props

  return (
    <div className={'card card--' + type}>
      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{type}</h3>

        <div className='card-front__wrapper'>
          <CardCount text={text} />

          <div className='card-front__icon'>
            <svg className={'icon icon-' + type}>
              <use xlinkHref={'#icon-' + type}></use>
            </svg>
          </div>

          <CardGraphic />
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{type}</div>
    </div>
  )
}

export default Card