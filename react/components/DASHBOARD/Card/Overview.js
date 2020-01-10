import React from 'react'

const Overview = (props) => {
  return(
    <div className={ 'card card--' + props.type + ' overview' }>
      {/* CARD-FRONT */}
      <div className='card__front overview'>
        <h3 className='overview__title card-title'>{props.type}</h3>
        
        <div className='overview__wrapper'>
          <div className='overview__graphic'>
            Global Graphic
          </div>
          <div className='overview__mark'>
            Global Mark
          </div>
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{'BACK ' + props.type}</div>
    </div>
  )
}

export default Overview