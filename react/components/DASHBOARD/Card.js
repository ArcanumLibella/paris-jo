import React from 'react'

const Card = (props) => {
  return(
    <div className={ 'card card--' + props.type }>
      <div className='card__front'>{'FRONT ' + props.type}</div>
      <div className='card__back'>{'BACK ' + props.type}</div>
    </div>
  )
}

export default Card