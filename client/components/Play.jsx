import React from 'react'

import Card from './Card'

const Play = (props) => {
  return (
    <div id='play'>{props.played ? <Card card={props.played} /> : ''}</div>
  )
}

export default Play