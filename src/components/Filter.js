import React, { Component } from 'react';


class Filter extends Component {

  render() {
    return (
      <div className="filterWrapper">
        <form >
          <input name="radio" type="radio" id="sortby" value="name"  onChange={this.props.handleFilter}/>
            <label for="sortby">Name</label>
          <input type="radio" name="radio" id="sortby" value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water" onChange={this.props.handleFilter}/>
            <label for="sortby">Weight</label>
          <input type="checkbox" name="greased" id="greased"  onClick={this.props.handleFilter} />
           <label for="greased">Greased?</label>
         </form>
       </div>
    )
  }
}

export default Filter
