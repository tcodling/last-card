import React from 'react'

class Style extends React.Component {
  render() {
    return (
      <ul id='styleChoice'>
          <li onClick={this.props.changeStyle}>Classic</li>
          <li onClick={this.props.changeStyle}>Pixel</li>
      </ul>
    )
  }
}

export default Style