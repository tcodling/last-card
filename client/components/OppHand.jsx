import React from 'react'

import Card from './Card'

const OppHand = (props) => {
  return (
    <div id='oppHand'>
      {props.oppHand.map((card, i) => <Card key={i} id={i} card={card} />)}
    </div>
  )
}

export default OppHand