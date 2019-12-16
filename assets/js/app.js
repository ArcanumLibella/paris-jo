import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.scss'

// COMPONENTS
import Dashboard from './Components/Dashboard.js'

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))