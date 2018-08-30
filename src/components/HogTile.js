import React, { Component } from 'react';
// import hogImgs from '../hog-imgs'

export default class HogTile extends Component {


constructor(){
  super()
  this.state = {
    status: false
  }
}

  handleClick = () =>{
    this.setState({
      status: !this.state.status
    })
  }


  showDeets = () => {
    const long = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    const list = <ul>
        <li> specialty: {this.props.hog.specialty}</li>
        <li> greased? {this.props.hog.greased ? "is greased" : "not greased"}</li>
        <li> medal: {this.props.hog["highest medal achieved"]}</li>
        <li> weight: {this.props.hog[long]}</li>
      </ul>
      return list
  }

  

  render() {
    const imgName = this.props.hog.name.split(' ').join('_').toLowerCase() + '.jpg'
    return (
      <div className="HogTile">
        <h1>{this.props.hog.name}</h1>
        <img src={require(`../hog-imgs/${imgName}`)} onClick={this.handleClick}/>
        {this.state.status === false ? '' : this.showDeets() }
      </div>
    )
  }
}
