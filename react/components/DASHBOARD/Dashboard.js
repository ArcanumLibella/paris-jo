import React from 'react'

// COMPONENTS
import Card from './Card/Card'
import Overview from './Card/Overview'

const Dashboard = (props) => {
  return (
    <section className='dashboard'>
      <h2 className='dashboard__title dashboard-title'>Numéro de l'arrondissement</h2>
      
      <div className='dashboard__wrapper cards'>
        <Card type='hostel' text='hostel'/>
        <Card type='food' text='restaurants'/>
        <Card type='activities' text='point of interest'/>
        <Card type='nature' text='ha of green space'/>

        <Overview type='overview'/>
        
        <Card type='affluence'/>
        <Card type='noise'/>
        <Card type='pollution'/>
        <Card type='cleanliness'/>
      </div>
    </section>
  )
}

export default Dashboard