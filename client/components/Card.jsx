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

  return (
    <div id={props.id} onClick={props.playCard} className='card'>
      <p className='leftValue'>{props.card.value}</p>
      <img className='suit' src={image} />
      <p className='rightValue'>{props.card.value}</p>
    </div>
  )
}

export default Card