import React, { useState } from 'react'

// COMPONENTS
import MenuItem from './MenuItem.jsx'
import SportCategoryItems from './SportCategoryItems.jsx'




const Menu = (props) => {
  return (
    <aside className='menu'>
      <MenuItem label='home' />

      {/* <MenuItem label='sports' /> */}
      <SportCategoryItems />
      {/* <MenuItem label='infos' /> */}
    </aside>
  )
}

export default Menu