import React from 'react'

const Podium = (props) => {
  return(
    <div className={ 'card card--' + props.type + ' podium' }>
      {/* CARD-FRONT */}
      <div className='card__front podium'>
        <h3 className='podium__title card-title'>{props.type}</h3>
        
        <div className='podium__wrapper'>
          
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{'BACK ' + props.type}</div>
    </div>
  )
}

export default Podium