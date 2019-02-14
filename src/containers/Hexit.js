import { connect } from 'react-redux';
import  { hexChanger } from '../actions'
import { bindActionCreators } from 'redux';

import React, { Component } from 'react'

import { HexForm, HexColor } from '../components/HexController';

class Hexit extends Component {
  
  changeHandle = e => {

    e.preventDefault();

    const hex = e.target.value;
    this.props.hexChanger(hex); 
  }

  render() {
    const { hex, hexError } = this.props.hexReducer;
    
    return (
      <div id="content">
          <HexForm changeHandle={this.changeHandle} errorMsg={hexError}/>
          <HexColor color={hex}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      hexReducer: state.hexReducer,
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({hexChanger}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hexit);