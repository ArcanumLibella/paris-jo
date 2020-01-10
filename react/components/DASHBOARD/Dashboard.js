import React from 'react'

// COMPONENTS
import Card from './Card'

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <h2 className='dashboard__title dashboard-title'>Numéro de l'arrondissement</h2>
      
      <div className='dashboard__wrapper cards'>
        <Card type='hostel'/>
        <Card type='food'/>
        <Card type='activities'/>
        <Card type='nature'/>
        <Card type='overview'/>
        <Card type='affluence'/>
        <Card type='noise'/>
        <Card type='pollution'/>
        <Card type='cleanliness'/>
      </div>
    </section>
  )
}

export default Dashboard