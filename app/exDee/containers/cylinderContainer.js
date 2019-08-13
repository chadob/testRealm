import React, { Component } from 'react'
import { connect } from 'react-redux'
import createRing from '../helperFunctions/createRing.js';
import createCylinder from '../helperFunctions/createCylinder.js';
import createCylinderStyles from '../helperFunctions/createCylinderStyles.js';
import Cylinder from '../components/sphere'

class CylinderContainer extends Component {
  constructor(props) {
    super(props)
    this.createRing = this.createRing.bind(this);
    this.createCylinder = this.createCylinder.bind(this);
    this.createCylinderStyles = this.createCylinderStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createRing(width, height, diameter vector, figure) {
    return createRing(width, height, diameter vector, figure)
  }
  createCylinder(width, height, diameter createRing, createReverseRing) {
    return createCylinder(width, height, diameter createRing, createReverseRing)
  }
  createCylinderStyles(className, width, height, diameter background, sides) {
    return createCylinderStyles(className, width, height, diameter background, sides);
  }
  componentDidMount() {
    var sides = this.createCylinder(this.props.width, this.props.height, this.props.diameter this.createRing);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createCylinderStyles(props.className, props.width, props.height, props.diameter 'red', sides)
      };
    });
  }

  render(){
    return(
      <Cylinder
        sides={this.state.sides}
        styles={this.state.styles}
        diameter={this.props.diameter}
        height={this.props.height}
        width={this.props.width}
        className={this.props.className}
      />
    );
  }
}
