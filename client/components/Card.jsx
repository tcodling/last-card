import React from 'react'

const Card = (props) => {
  let image
  let suit = props.card.suit
  if (suit === 'hearts') {
    image = '/images/heart.svg'
  } else if (suit === 'spades') {
    image = '/images/spade.svg'
  } else if (suit === 'diamonds') {
    image = '/images/diamond.svg'
  } else if (suit === 'clubs') {
    image = '/images/club.svg'
  }


  // TODO: Figure out a proper way to do this without ids
  return (
    <div id={props.id} onClick={props.playCard} className='card slide-in-top'>
      <p id={props.id} className='leftValue'>{props.card.value}</p>
      <img id={props.id} className='suit' src={image} />
      <p id={props.id} className='rightValue'>{props.card.value}</p>
    </div>
  )
}

export default Card