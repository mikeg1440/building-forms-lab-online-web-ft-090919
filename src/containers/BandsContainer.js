import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Bands from '../components/Bands.js'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput  addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch({type: 'ADD_BAND', band})}
}

const mapStateToProps = ({bands}) => {
  return {bands: bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
