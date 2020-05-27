import React from 'react'

import Card from './Card'

const Play = (props) => {
  return (
    <div id='play'>{props.played ? <Card style={props.style} card={props.played} /> : ''}</div>
  )
}

export default Play