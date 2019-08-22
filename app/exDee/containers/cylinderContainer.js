import React, { Component } from 'react'
import createRing from '../helperFunctions/createRing.js';
import createCylinderRing from '../helperFunctions/createCylinderRing.js';
import createCylinder from '../helperFunctions/createCylinder.js';
import createCylinderStyles from '../helperFunctions/createCylinderStyles.js';
import Cylinder from '../components/cylinder'

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
  createRing(aroundXSides, width, height, vector, figure) {
    return createRing(aroundXSides, width, height, vector, figure)
  }
  createCylinderRing(aroundXSides, width, height, diameter, vector, figure) {
    return createCylinderRing(aroundXSides, width, height, diameter, vector, figure)
  }
  createCylinder(aroundYSides, aroundXSides, width, height, diameter, createRing, createCylinderRing) {
    return createCylinder(aroundYSides, aroundXSides, width, height, diameter, createRing, createCylinderRing)
  }
  createCylinderStyles(className, width, height, diameter, background, sides, aroundYSides, aroundXSides) {
    return createCylinderStyles(className, width, height, diameter, background, sides, aroundYSides, aroundXSides);
  }
  componentDidMount() {
    var sides = this.createCylinder(this.props.aroundYSides, this.props.aroundXSides, this.props.width, this.props.height, this.props.diameter, this.createRing, this.createCylinderRing);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createCylinderStyles(props.className, props.width, props.height, props.diameter, 'red', sides, props.aroundYSides, props.aroundXSides)
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


export default CylinderContainer
