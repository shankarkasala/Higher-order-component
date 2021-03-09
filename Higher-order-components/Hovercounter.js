import React, { Component } from 'react'
import Hoc from './Hoc'

class Hovercounter extends Component {
    render() {
        return (
            <div>
              <h1 onMouseOver={this.props.increment}>{this.props.counter}</h1>  
            </div>
        )
    }
}

export default Hoc(Hovercounter)
