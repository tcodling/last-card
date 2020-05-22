import React from 'react'

const Card = (props) => {
  return (
    <div class='card'>
      <p>{props.value} {props.suit}</p>
    </div>
  )
}

export default Card