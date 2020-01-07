import React, { useState } from 'react'

// COMPONENTS
import MenuItem from './MenuItem'
import SportItem from './SportItem'

const Menu = () => {
  // const [isClicked, setIsClicked] = useState('')

  // const handleSportDisplay = event => {
  //   const value = false
  //   setIsClicked(!value)
  //   console.log()
  // }

  return (
    <aside className='menu'>
      <MenuItem text='home' />

      <MenuItem text='sports'/>
      {/* <div value={isClicked} onClick={handleSportDisplay} className='sports'> */}
        <SportItem sportName='shoot' color='#D29B85' />
        <SportItem sportName='team' color='#64E0B9'/>
        <SportItem sportName='water' color='#95E1EC'/>
        <SportItem sportName='athletics' color='#F4C61E'/>
        <SportItem sportName='gym' color='#F3A2A2'/>
        <SportItem sportName='fight' color='#2C3950'/>
        <SportItem sportName='racket' color='#E972DD'/>
      {/* </div> */}

      <MenuItem text='infos' />
    </aside>
  )
}

export default Menu