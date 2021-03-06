import React from 'react'

const Card = (props) => {
  let image
  let suit = props.card.suit
  if (props.style === 'classic') {
    if (suit === 'hearts') {
      image = '/images/heart.png'
    } else if (suit === 'spades') {
      image = '/images/spade.png'
    } else if (suit === 'diamonds') {
      image = '/images/diamond.png'
    } else if (suit === 'clubs') {
      image = '/images/club.png'
    }
  } else if (props.style === 'pixel') {
    if (suit === 'hearts') {
      image = '/images/pixHeart.png'
    } else if (suit === 'spades') {
      image = '/images/pixSpade.png'
    } else if (suit === 'diamonds') {
      image = '/images/pixDiamond.png'
    } else if (suit === 'clubs') {
      image = '/images/pixClub.png'
    }
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