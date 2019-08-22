import React, { Component } from 'react'
import createCuboid from '../helperFunctions/createCuboid.js';
import createCuboidStyles from '../helperFunctions/createCuboidStyles.js';
import Cuboid from '../components/cuboid'

class CuboidContainer extends Component {
  constructor(props) {
    super(props)
    this.createCuboid = this.createCuboid.bind(this);
    this.createCuboidStyles = this.createCuboidStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createCuboid(aroundYSides, aroundXSides, width, height, length, createRing, createCuboidRing) {
    return createCuboid(aroundYSides, aroundXSides, width, height, length, createRing, createCuboidRing)
  }
  createCuboidStyles(className, width, height, length, background, sides, aroundYSides, aroundXSides) {
    return createCuboidStyles(className, width, height, length, background, sides, aroundYSides, aroundXSides);
  }
  componentDidMount() {
    var sides = this.createCuboid(this.props.aroundYSides, this.props.aroundXSides, this.props.width, this.props.height, this.props.length, this.createRing, this.createCuboidRing);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createCuboidStyles(props.className, props.width, props.height, props.length, 'red', sides, props.aroundYSides, props.aroundXSides)
      };
    });
  }

  render(){
    return(
      <Cuboid
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

export default CuboidContainer
