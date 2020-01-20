import React from 'react'

// COMPONENTS
import Card from './Card/Card.jsx'
import Overview from './Card/Overview.jsx'

const Dashboard = (props) => {
  return (
    <section className='dashboard'>
      <h2 className='dashboard__title dashboard-title'>Numéro de l'arrondissement</h2>

      <div className='dashboard__wrapper cards'>
        <Card type='hostel' text='hostel' />
        <Card type='food' text='restaurants' />
        <Card type='activities' text='point of interest' />
        <Card type='nature' text='ha of green space' />

        <Overview type='overview' />

        <Card type='affluence' />
        <Card type='noise' />
        <Card type='pollution' />
        <Card type='cleanliness' />
      </div>
      <div className='tuto'>
        <svg className='icon icon-tuto'>
          <use xlinkHref='#icon-tuto'></use>
        </svg>
      </div>
    </section>
  )
}

export default Dashboard