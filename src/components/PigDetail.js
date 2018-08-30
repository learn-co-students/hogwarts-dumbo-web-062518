import React, { Component } from 'react';

class PigDetail extends Component {

  render() {
    return (
    <span className="">
    <p>Specialty: {this.props.pig.specialty}</p>
    <p>Greased? {(this.props.pig.greased) ? 'Yes' : 'No'}</p>
    <p>Weight:  {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    <p className="achievementText">Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
    </span>
    )
  }
}

export default PigDetail
