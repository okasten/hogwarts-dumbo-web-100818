import React, {Component} from 'react'

export default class Hog extends Component{
  state = {
    clicked: false
  }

  handleClick = () => {
    console.log(this.state.clicked)
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.hog.name}</h1>
        <div>{this.state.clicked ? (<ul>
          <li>Specialty: {this.props.hog.specialty}</li>
          <li>Greased?: {this.props.hog.greased}</li>
        </ul>):(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtygTOEPsE-rla9TsVUWKdtWR6bp2MfpU0y3lSxTPYT-UMCtf" alt=""/>)}</div>
      </div>
    )
  }
}
