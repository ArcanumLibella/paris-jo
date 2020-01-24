import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../public/assets/css/app.scss'

// COMPONENTS
import { Menu, Dashboard, Map } from './components'

function App() {
  return (
    <div className="App">
      <main className='homepage'>
        <Menu />
        {/* <Map /> */}
        <Dashboard />
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))