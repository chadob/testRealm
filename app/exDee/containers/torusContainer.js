import React, { Component } from 'react'
import createRing from '../helperFunctions/createRing.js';
import createTorus from '../helperFunctions/createTorus.js';
import createTorusStyles from '../helperFunctions/createTorusStyles.js';
import Torus from '../components/sphere'

class TorusContainer extends Component {
  constructor(props) {
    super(props)
    this.createRing = this.createRing.bind(this);
    this.createTorus = this.createTorus.bind(this);
    this.createTorusStyles = this.createTorusStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createRing(aroundXSides, width, height, vector, figure) {
    return createRing(aroundXSides, width, height, vector, figure)
  }
  createTorus(aroundYSides, aroundXSides, width, height, createRing, createReverseRing) {
    return createTorus(aroundYSides, aroundXSides, width, height, createRing, createReverseRing)
  }
  createTorusStyles(className, width, height, background, sides, aroundYSides, aroundXSides) {
    return createTorusStyles(className, width, height, background, sides, aroundYSides, aroundXSides);
  }
  componentDidMount() {
    var sides = this.createTorus(this.props.aroundYSides, this.props.aroundXSides, this.props.width, this.props.height, this.createRing);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createTorusStyles(props.className, props.width, props.height, 'red', sides, props.aroundYSides, props.aroundXSides)
      };
    });
  }

  render(){
    return(
      <Torus
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

export default TorusContainer
