import React from 'react'

class Deck extends React.Component {
  state = {
    cards: this.props.cards
  }

  shuffle = () => {
    this.setState({
      cards: this.state.cards.sort(() => Math.random() - 0.5)
    })
  }

  render() {
    return (
      <div id='deck' onClick={this.shuffle}></div>
    )
  }
}

export default Deck