import React from 'react'

import Card from './Card'

const Hand = (props) => {
  return (
    <div id='hand'>
      {props.hand.map(card => <Card suit={card.suit} value={card.value} />)}
    </div>
  )
}

export default Hand