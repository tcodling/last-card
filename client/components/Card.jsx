import React from 'react'

const Card = (props) => {
  return (
    <div id={props.id} onClick={props.playCard} className='card'>
      <p>{props.card.value} {props.card.suit}</p>
    </div>
  )
}

export default Card