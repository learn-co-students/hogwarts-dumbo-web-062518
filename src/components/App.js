import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        < HogContainer />
      </div>
    )
  }
}

export default App;


// create an index displaying all hog tiles
// render each hog name and picture in a tile
// show the hog's details upon a user's click
// allow users to sort the hogs based on name and weight and filter the hogs that are greased
