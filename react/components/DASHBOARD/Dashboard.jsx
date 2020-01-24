import React from 'react'

// COMPONENTS
import Card from './Card/Card.jsx'
import Podium from './Card/Podium.jsx'
import { Tuto, Cross } from '../../../public/assets/icons/all-icons'



const Dashboard = (props) => {
  const [isClosed, setIsClosed] = React.useState('true')

  // function to toggle dashboard display
  const handleDashboardDisplay = () => {
    setIsClosed(!isClosed)
  }

  return (
    <section 
      className={
        isClosed 
        ? 'dashboard' 
        : 'dashboard is-closed'}>
      <h2 className='dashboard__title dashboard-title'>Xème arrondissement</h2>
      <div 
        className='cross'
        onClick={() => handleDashboardDisplay()}>
        <Cross/>
      </div>
      <div className='dashboard__wrapper cards'>

        <Podium type='podium' />
        <Card type='nature' text='ha of green space' />
        <Card type='hostel' text='hostels' />
        <Card type='culture' text='point of interest' />
        <Card type='restaurant' text='restaurants' />

      </div>
      <div className='tuto'>
        <Tuto/>
      </div>
    </section>
  )
}

export default Dashboard