import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../public/assets/css/app.scss'

// COMPONENTS
import Menu from './components/MENU/Menu.js'
import Dashboard from './components/DASHBOARD/Dashboard.js'

function App() {
  return (
    <div className="App">
      <main className='homepage'>
        <Menu />
        <Dashboard />
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))