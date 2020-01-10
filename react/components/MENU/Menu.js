import React, { useState } from 'react'

// COMPONENTS
import MenuItem from './MenuItem.js'
import SportItems from './SportItems.js'




const Menu = (props) => {
  return (
    <aside className='menu'>
      <MenuItem label='home' />

      <MenuItem label='sports'/>
        <SportItems />
      <MenuItem label='infos' />
    </aside>
  )
}

export default Menu