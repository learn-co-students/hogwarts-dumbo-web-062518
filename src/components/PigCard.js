import React, { Component } from 'react';
import PigDetail from './PigDetail'

class PigCard extends Component {
  state = {
    isHidden : true
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

    let pigName = this.props.pig.name
    let regex = /\ /g
    let fileName = pigName.replace(regex, '_').toLowerCase()
    let pigImage = require('../hog-imgs/' + fileName + '.jpg')

    return (
      <div className="pigTile" onClick={this.toggleHidden}>
        <h1>{this.props.pig.name}</h1>
        <img src={pigImage} />
        {!this.state.isHidden && <PigDetail pig={this.props.pig}/>}
      </div>
    )
  }
}

export default PigCard
// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }
