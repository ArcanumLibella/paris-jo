import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../public/assets/css/app.scss'

// COMPONENTS
import Menu from './components/MENU/Menu.jsx'
import Dashboard from './components/DASHBOARD/Dashboard.jsx'
import Map from './components/MAP/Map.jsx'

function App() {
  return (
    <div className="App">
      <main className='homepage'>
        <Menu />
        <Map />
        <Dashboard />
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))