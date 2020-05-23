import React from 'react'

import Card from './Card'

const Hand = (props) => {
  return (
    <div id='hand'>
      {props.hand.map((card, i) => <Card key={i} id={i} playCard={props.playCard} card={card} />)}
    </div>
  )
}

export default Hand