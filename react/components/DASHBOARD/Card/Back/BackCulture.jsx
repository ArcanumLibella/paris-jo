import React from 'react'

const BackCulture = ( props ) => {
  const { type, text, cultureActivity } = props

  return (
    <div className='card-back card-back--culture'>
      <h3 className='card-back__title card-title'>{type}</h3>

      <div className='card-back__wrapper'>

        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <svg className='icon icon-museum'>
              <use xlinkHref='#icon-museum'></use>
            </svg>
          </div>
          <p className='card-back__data card-data'>3 museum</p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <svg className='icon icon-theater'>
              <use xlinkHref='#icon-theater'></use>
            </svg>
          </div>
          <p className='card-back__data card-data'>2 theaters</p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <svg className='icon icon-concert'>
              <use xlinkHref='#icon-concert'></use>
            </svg>
          </div>
          <p className='card-back__data card-data'>8 concerts</p>
        </div>

      </div>
    </div>
  )
}

export default BackCulture