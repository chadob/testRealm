import React, { Component } from 'react'
import { connect } from 'react-redux'
import createRing from '../helperFunctions/createRingAroundAnyAxis.js';
import createSphere from '../helperFunctions/createSphere.js';
import createStyles from '../helperFunctions/createStyles.js';
import Sphere from '../components/sphere'

class SphereContainer extends Component {
  constructor(props) {
    super(props)
    this.createRing = this.createRing.bind(this);
    this.createSphere = this.createSphere.bind(this);
    this.createStyles = this.createStyles.bind(this);
    this.state = {
      sides: [],
      styles: {}
    }
  }
  createRing(numSides, width, vector, figure) {
    return createRing(numSides, width, vector, figure)
  }
  createSphere(numSides, width, createRing) {
    return createSphere(numSides, width, createRing)
  }
  createStyles(className, width, height, background, sides, numSides) {
    return createStyles(className, width, height, background, sides, numSides);
  }
  componentDidMount() {
    var sides = this.createSphere(this.props.numSides, this.props.width, this.createRing);
    console.log(sides)
    this.setState((state, props) => {
      return {
        ...state,
        sides: sides,
        styles: this.createStyles(props.className, props.width, props.height, 'red', sides, props.numSides)
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

//add name of reducer
const mapStateToProps = state => ({
  length: state.index.regular.length,
  height: state.index.regular.height,
  width: state.index.regular.width,
  numSides: state.index.regular.numSides,
  className: state.index.regular.className
})

export default connect(
  mapStateToProps
)(SphereContainer)
