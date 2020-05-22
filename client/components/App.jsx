import React from 'react'

import Play from './Play'
import Deck from './Deck'

import cards from '../cards.json'

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Last Card</h1>
      <div id='board'>
        <Play />
        <Deck cards={cards} />
      </div>
      </>
    )
  }
}

export default App
