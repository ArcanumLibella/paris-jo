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
        <SportItem sportName='tir' color='blue'/>
        <SportItem sportName='équipe' color='purple'/>
        <SportItem sportName='eau' color='pink'/>
        <SportItem sportName='athlétisme' color='yellow'/>
        <SportItem sportName='gymnastique' color='orange'/>
        <SportItem sportName='combat' color='brown'/>
        <SportItem sportName='raquette' color='red'/>
      {/* </div> */}

      <MenuItem text='infos' />
    </aside>
  )
}

export default Menu