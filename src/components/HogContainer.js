import React from 'react';
import HogCard from './HogCard'

export default class HogContainer extends React.Component{


state = {
  sort: 'all',
}
  handleChange = (e) => {
    this.setState({sort: e.target.value})
  }

  pigMap = (array) => {
    return array.map((hog) => {
      return  <HogCard key={hog.name} hog={hog}/>
    })
  }


  hogMap = () => {
    const weightdumbkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    switch(this.state.sort){
      case 'name' :
        const nameSort = this.props.hogs.sort((hoga, hogb) => {
          if(hogb.name < hoga.name) return 1;
          if(hoga.name < hogb.name) return -1;
          return 0;
        })
        return this.pigMap(nameSort)
        break

    case 'weight' :
      const weightSorted = this.props.hogs.sort((a, b) =>{
        return b[weightdumbkey] - a[weightdumbkey]
      })
      return this.pigMap(weightSorted)

      break

      case 'greased' :
       const greasedSorted = this.props.hogs.filter((hog) => {
        return hog.greased === true
        })

        return this.pigMap(greasedSorted)
      break

    default :
      return this.pigMap(this.props.hogs)
    }
  }

  render () {
    const weightdumbkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    return (
      <div>
      <label >Sort By: </label>
      <select onChange={this.handleChange}>
      <option value="all" >None</option>
      <option value="weight">Weight</option>
      <option value="name">Name</option>
      </select>

      <label >Filter: </label>
      <select onChange={this.handleChange}>
      <option value="all" >All</option>
      <option value="greased" >Greased</option>
      </select>

      {this.hogMap()}

      </div>
    )
  }
}
