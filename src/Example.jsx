import React, { Component } from 'react'

export default class Example extends Component {
    state ={
        value: 0,
        arr: []
    }
    addcount = () => {
        this.setState({
           value: this.state.value+1
        })
    }
  render() {
    return (
      <div>
        <h1>class componnent</h1>
        {this.state.value}
        <button onClick={() => this.addcount}>add count</button>
      </div>
    )
  }
}
