import React from 'react'

const Card = (props) => {
  return(
    <div className={ 'card card--' + props.type }>
      {/* CARD-FRONT */}
      <div className='card__front card-front'>
        <h3 className='card-front__title card-title'>{props.type}</h3>
        
        <div className='card-front__wrapper'>
          <div className='card-front__count'>
            <h4 className='card-count'>
              <span>150</span>
              {' ' + props.text}
            </h4>
          </div>

          <div className='card-front__icon'>
            <svg className={'icon icon-' + props.type}>
              <use xlinkHref={'#icon-' + props.type}></use>
            </svg>
          </div>

          <div className='card-front__graphic'>

          </div>
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{'BACK ' + props.type}</div>
    </div>
  )
}

export default Card