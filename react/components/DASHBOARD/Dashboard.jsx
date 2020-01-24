import React from 'react'

// COMPONENTS
import Card from './Card/Card.jsx'
import Podium from './Card/Podium.jsx'
import { Tuto } from '../../../public/assets/icons/all-icons'




const Dashboard = (props) => {
  return (
    <section className='dashboard'>
      <h2 className='dashboard__title dashboard-title'>Numéro de l'arrondissement</h2>

      <div className='dashboard__wrapper cards'>
        
        <Podium type='podium' />
        <Card type='nature' text='ha of green space' />
        <Card type='hostel' text='hostel' />
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