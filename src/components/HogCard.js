import React from 'react';

export default class HogCard extends React.Component{

  state = {
    pigInfo: false,
    hidden: false
  }


  handleClick = () => {
    this.setState((prevState) => (
      {pigInfo: !prevState.pigInfo}
    ))
  }

  handleButton = (e) => {
    this.setState((prevState) => (
      {hidden: !prevState.hidden}
    ))
  }

  render () {
      const weightdumbkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      const medalKey = 'highest medal achieved'
      const editName = this.props.hog.name.toLowerCase().split(' ').join('_') +'.jpg'
    return (
      <div onClick={this.handleClick} >
      <button id={`button-${this.props.hog.name}`}onClick={this.handleButton}>Hide {this.props.hog.name}</button>
      {this.state.hidden ?   <p> hog Hidden </p> :
        <div>
        <h3>{this.props.hog.name}</h3><br/>
        <img src={require(`../hog-imgs/` + editName)}/> <br/>
        {this.state.pigInfo ?
          <div>
          <p>{this.props.hog.specialty}</p>
          {this.props.hog.greased ? <p>Greased!</p> : <p>Not greased...</p>}
          <p>{this.props.hog[weightdumbkey]}</p>
          <p>{this.props.hog[medalKey]}</p>
          </div> :
          <p>click to display info</p>
        }
        </div>
      }
      </div>
    )
  }
}
