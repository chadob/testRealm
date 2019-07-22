import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createShape, createStyles, multiplyMatrices } from '../helperFunctions/angleRotation.js'
import Regular from '../components/regular'

class RegularContainer extends Component {
  constructor(props) {
    super(props)
    this.createShape = this.createShape.bind(this);
    this.multiplyMatrices = this.multiplyMatrices.bind(this);
    this.createStyles = this.createStyles.bind(this);
  }
  createShape(numSides, length, className) {
    this.props.createShape(numSides, length, className);
  }
  createStyles(className, width, height, background, numSides) {
    this.props.createStyles(className, width, height, background, numSides);
  }
  multiplyMatrices(a,b) {
    this.props.multiplyMatrices(a,b);
  }
  componentDidMount() {
    this.createShape(4, 200, 'bob', this.multiplyMatrices);
    this.createStyles();
  }

  render(){
    console.log(this.props)
    return(
      <Regular
        length={this.props.length}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

//add name of reducer
const mapStateToProps = state => ({
  length: state.index.regular.length,
  height: state.index.regular.height,
  width: state.index.regular.width,
})

export default connect(
  mapStateToProps
)(RegularContainer)
