import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resizeWindow } from '../actions'
import Cuboid from '../components/cuboid'

class CuboidContainer extends Component {
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
      <Cuboid
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
  length: state.index.cuboid.length,
  height: state.index.cuboid.height,
  width: state.index.cuboid.width,
  windowWidth: state.index.cuboid.windowWidth,
  windowHeight: state.index.cuboid.windowHeight
})

const mapDispatchToProps = dispatch => ({
  resizeWindow: (windowWidth, windowHeight) => dispatch(resizeWindow(windowWidth, windowHeight)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuboidContainer)
