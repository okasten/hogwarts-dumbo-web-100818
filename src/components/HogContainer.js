import React, {Component} from 'react';
import hogs from '../porkers_data';
import Hog from './Hog.js'

export default class HogContainer extends Component {
  state = {
    hogs: hogs,
    filtered: hogs
  }

  render(){

    let list = this.state.filtered.map(hog => {
      return (<Hog hog={hog}/>)
    })
    return(
      <div>{list}</div>
    )
  }

}
