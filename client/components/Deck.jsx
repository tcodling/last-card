import React from 'react'

class Deck extends React.Component {
  render() {
    return (
      <div onClick={this.props.draw} id='deck'></div>
    )
  }
}

export default Deck