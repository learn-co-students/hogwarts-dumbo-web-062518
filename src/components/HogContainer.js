import React, { Component } from 'react';
import HogTile from "./HogTile"

export default class HogContainer extends Component {

  createHog = () => {
    return this.props.dataHogs.map(h => {
      return <HogTile key ={h.name} hog ={h}/>
    })
  }



  render() {
    // console.log(this.props.dataHogs);
    return (
      <div className="HogContainer">
        {this.createHog()}
      </div>
    )
  }
}
