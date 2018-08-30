import React, { Component } from 'react';
import hogs from '../porkers_data';
import Filter from './Filter';
import PigList from './PigList';


class HogContainer extends Component {
  state = {
    hogs: [],
    isChecked : false
  }

  handleFilter = (e) => {

    (e.target.type === 'checkbox') ? this.greasedPigs() : (this.organizeHogs(e.target.value))

    }

  greasedPigs = () => {
    this.setState({isChecked: !this.state.isChecked}, () => {
      let greasedHogs = []
      if (this.state.isChecked){
        this.state.hogs.map(hog => { if (hog.greased){ greasedHogs.push(hog)} })
      } else {
        greasedHogs = [...hogs]
      }
      this.setState({
        hogs: [...greasedHogs]
      })
    })

  }
  organizeHogs = (value) => {
    var sortedHogs
    if (value === 'name') {
       sortedHogs = hogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

  // names must be equal
      return 0;
    });
  } else {
       sortedHogs = hogs.sort(function (a, b) {
        return a[value] - b[value];
      });
    }

      let greasedHogs = []
      if (this.state.isChecked){
        sortedHogs.map(hog => { if (hog.greased){ greasedHogs.push(hog)} })
      } else {
        greasedHogs = [...sortedHogs]
      }
      this.setState({
        hogs: [...greasedHogs]
      })

  }

  render() {
    return (
      <div>
      <div>
        < Filter hogs={this.state.hogs} handleFilter={this.handleFilter}/>
      </div>
      <div>
        < PigList hogs={this.state.hogs}/>
      </div>
      </div>
    )
  }
}

export default HogContainer
