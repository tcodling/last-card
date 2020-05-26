import React from 'react'

class Style extends React.Component {
  render() {
    return (
      <div>
          <div onClick={this.props.changeStyle}>Classic</div>
          <div onClick={this.props.changeStyle}>Pixel</div>
      </div>
    )
  }
}

export default Style