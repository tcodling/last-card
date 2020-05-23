import React from 'react'

import Play from './Play'
import Deck from './Deck'
import Hand from './Hand'

import cards from '../cards.json'

class App extends React.Component {
  state = {
    deck: cards,
    hand: [],
    play: []
  }

  componentDidMount = () => {
    this.shuffle()
  }

  shuffle = () => {
    this.setState({
      deck: this.state.deck.sort(() => Math.random() - 0.5)
    })
  }

  draw = () => {
    let currentHand = this.state.hand
    currentHand.push(this.state.deck[0])
    this.setState({
      hand: currentHand,
      deck: this.state.deck.slice(1)
    })
  }

  play = (event) => {
    let currentPlay = this.state.play
    currentPlay.unshift(this.state.hand[event.target.id])
    this.setState({
      play: currentPlay
    })
  }

  render() {
    return (
      <>
      <h1>Last Card</h1>
      <div id='board'>
        <Play played={this.state.play[0]} />
        <Deck draw={this.draw} cards={this.state.deck} />
      </div>
      <Hand playCard={this.play} hand={this.state.hand} />
      </>
    )
  }
}

export default App
