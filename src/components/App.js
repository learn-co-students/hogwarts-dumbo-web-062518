import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      allHogs: hogs
    }
  }

  filterHogs = (key) => {
    if( key === "all"){
      this.setState({
        allHogs: hogs
      })
    } else {
      const filteredHogs = hogs.filter(hog => hog.greased.toString() === key);

      this.setState({
        allHogs: filteredHogs
      })
    }
  }

  sortHogs = (key) => {
    const longAF = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if(key === "name"){
      const sortedHogs = this.state.allHogs.sort((a, b) => {
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }
           // a must be equal to b
           return 0;
        })
      console.log(sortedHogs);
      this.setState({
        allHogs: sortedHogs
      })
    } else {
      const sortedHogs = this.state.allHogs.sort((a,b)=>{
                          return a[longAF] - b[longAF]
                        })
      console.log(sortedHogs);
      this.setState({
        allHogs: sortedHogs
      })
    }
  }

  render() {
    // console.log(hogs);
    return (
      <div className="App">
          < Nav />
          < Filter filterHogs={this.filterHogs} sortHogs ={this.sortHogs}/>
          < HogContainer dataHogs={this.state.allHogs}/>
      </div>
    )
  }
}

export default App;
