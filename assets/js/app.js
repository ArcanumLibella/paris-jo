import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../css/app.scss'

// COMPONENTS
import Menu from './Components/Menu.js'
import Dashboard from './Components/Dashboard.js'

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Menu />
        <Dashboard />
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))