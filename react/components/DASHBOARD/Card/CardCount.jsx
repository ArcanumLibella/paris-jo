import React from 'react'



const CardCount = (props) => {
  return(
    <div className='card-front__count'>
      <h4 className='card-count'>
        <span>150</span>
        {' ' + props.text}
      </h4>
    </div>
  )
}

export default CardCount