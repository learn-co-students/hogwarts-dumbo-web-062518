import React, { Component } from 'react';

export default class Filter extends Component {


  greaseChange = (event) =>{
    this.props.filterHogs(event.target.value)
  }

  nameSort = (event) =>{
    this.props.sortHogs(event.target.value)
  }



  render() {
    const longAF = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    return (
      <div className="Filter">
        <select onChange = {this.greaseChange}>
        <option value="all">
          All
        </option>
          <option value="true">
          Greased
          </option>
          <option value="false">
          Not greased
          </option>
        </select>

        <select onChange = {this.nameSort}>
          <option value= "name">
          Name
          </option>
          <option value= {longAF}>
          Weight
          </option>
        </select>
      </div>
    )
  }
}
