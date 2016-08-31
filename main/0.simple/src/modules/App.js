import React from 'react'
import {Link} from 'react-router'

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        {this.props.children}
      </div>
    )
  }
})

export default App
