import React from 'react'

// COMPONENTS
import CardCount from './CardCount'
import CardGraphic from './CardGraphic'

const Card = (props) => {
  return(
    <div className={ 'card card--' + props.type }>
      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{props.type}</h3>
        
        <div className='card-front__wrapper'>
          <CardCount text={props.text}/>

          <div className='card-front__icon'>
            <svg className={'icon icon-' + props.type}>
              <use xlinkHref={'#icon-' + props.type}></use>
            </svg>
          </div>

          <CardGraphic />
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{props.type}</div>
    </div>
  )
}

export default Card