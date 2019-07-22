import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resizeWindow } from '../actions'
import Cylinder from '../components/cylinder'

class CylinderContainer extends Component {
  constructor(props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.props.resizeWindow(window.innerWidth, window.innerHeight)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render(){
    console.log(this.props)
    return(
      <Cylinder
        length={this.props.length}
        height={this.props.height}
        width={this.props.width}
        windowWidth={this.props.windowWidth}
        windowHeight={this.props.windowHeight}
      />
    );
  }
}

//add name of reducer
const mapStateToProps = state => ({
  length: state.index.cylinder.length,
  height: state.index.cylinder.height,
  width: state.index.cylinder.width,
  windowWidth: state.index.cylinder.windowWidth,
  windowHeight: state.index.cylinder.windowHeight
})

const mapDispatchToProps = dispatch => ({
  resizeWindow: (windowWidth, windowHeight) => dispatch(resizeWindow(windowWidth, windowHeight)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CylinderContainer)
