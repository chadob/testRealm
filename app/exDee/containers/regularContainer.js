import React, { Component } from 'react'
import createShape from '../helperFunctions/createShape.js';
import createRegularStyles from '../helperFunctions/createRegularStyles.js';
import Regular from '../components/regular'

class RegularContainer extends Component {
  constructor(props) {
    super(props)
    this.createShape = this.createShape.bind(this);
    this.createRegularStyles = this.createRegularStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createShape(numSides, width, className) {
    return createShape(numSides, width, className)
  }
  createRegularStyles(className, width, height, background, sides, numSides) {
    return createRegularStyles(className, width, height, background, sides, numSides);
  }
  componentDidMount() {
    var sides = this.createShape(this.props.numSides, this.props.width, this.props.className);
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createRegularStyles(props.className, props.width, props.height, 'red', sides, props.numSides)
      };
    });
  }

  render(){
    return(
      <Regular
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


export default RegularContainer
