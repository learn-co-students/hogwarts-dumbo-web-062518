import React, { Component } from 'react';
import PigCard from './PigCard'

class PigList extends Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(pig => {
          return (<div className="ui eight wide column">
              < PigCard pig={pig} />
          </div>
          )
        })}
      </div>
    )
  }
}

export default PigList
