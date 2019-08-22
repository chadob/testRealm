import React, { Component } from 'react'
import createRing from '../helperFunctions/createRing.js';
import createSphere from '../helperFunctions/createSphere.js';
import createSphereStyles from '../helperFunctions/createSphereStyles.js';
import Sphere from '../components/sphere'

class SphereContainer extends Component {
  constructor(props) {
    super(props)
    this.createRing = this.createRing.bind(this);
    this.createSphere = this.createSphere.bind(this);
    this.createSphereStyles = this.createSphereStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createRing(numSides, width, height, vector, figure) {
    return createRing(numSides, width, height, vector, figure)
  }
  createSphere(numSides, width, height, createRing) {
    return createSphere(numSides, width, height, createRing)
  }
  createSphereStyles(className, width, height, background, sides, numSides) {
    return createSphereStyles(className, width, height, background, sides, numSides);
  }
  componentDidMount() {
    var sides = this.createSphere(this.props.numSides, this.props.width, this.props.height, this.createRing);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createSphereStyles(props.className, props.width, props.height, 'red', sides, props.numSides)
      };
    });
  }

  render(){
    return(
      <Sphere
        sides={this.state.sides}
        styles={this.state.styles}
        length={this.props.length}
        height={this.props.height}
        width={this.props.width}
        className={this.props.className}
      />
    );
  }
}

export default SphereContainer
