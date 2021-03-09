import React, { Component } from 'react'
import Hoc from './Hoc'

 class Clickcounter extends Component {
    render() {
       
        
        return (
            <div>
               <h1>{this.props.name}</h1>
                <button onClick={this.props.increment}>click {this.props.counter}</button>
            </div>
        )
    }
}

export default Hoc(Clickcounter)
