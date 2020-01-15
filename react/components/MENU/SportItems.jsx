import React, { useState } from 'react'

import SportItem from "./SportItem.jsx";

// DATA
const sportsList = require('../../data/sportsList');



const SportItems = (props) => {
  // const [sports, setSports] = useState(sportsList.sports.map(sport => Object.assign(sport, { selected: false })));


  // const setItemSelected = selected_id => {

  //   const selectedSports = sports.map(
  //     s => {
  //       if (s.id === selected_id) {
  //         console.log(Object.assign(s, { selected: true }));

  //         return Object.assign(s, { selected: true })
  //       } else {
  //         return Object.assign(s, { selected: false })
  //       }
  //     }
  //   )

  //   console.log(selected_id, selectedSports);

  //   setSports(selectedSports);
  // }

  // Déclaration qui map sur chaque sport de sportsList
  const displaySportItems = () => {
    return sportsList.sports.map
      (
        sportItem => (
          <SportItem
            key={sportItem.id}
            selected={sportItem.selected}
            sportItem={sportItem}
          />
          // sportItem => (
          //   <SportItem
          //     key={sportItem.id}
          //     selected={sportItem.selected}
          //     sportItem={sportItem}
          //     setItemSelected={setItemSelected}<-- FIXME from child to parent
          //   />
        )
      )
  }

  return (
    <ul className='sports'>{displaySportItems()}</ul>
  )
}

export default SportItems