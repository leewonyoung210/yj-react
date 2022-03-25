import React, { Component } from 'react' //library call

export default class Friend extends Component{
   
    render(){
        const { name, age, city } = this.props
    
    return (
      <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{city}</h3>
        <h3>-*-*-*-*-*-*-*-*-*-</h3>
      </>
    )
  }
}