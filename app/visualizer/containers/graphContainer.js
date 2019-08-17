import React, { Component } from 'react'
import { connect } from 'react-redux'
import { maxBars, minBars} from '../actions'
import {moveBars, createOdds} from '../helperFunctions/moveBars.js';
import '../styles/visualizer.css'
import {Graph} from '../components/graph'

class GraphContainer extends Component {
  constructor(props) {
    super(props)
    this.moveBars = this.moveBars.bind(this);
    this.createOdds = this.createOdds.bind(this);
    this.maxBars = this.maxBars.bind(this);
    this.minBars = this.minBars.bind(this);
    this.state = {
      numberPicker: [],
      bars: {
        values: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
      }
    }
  }
  timedAdjust(values, numberPicker) {
    setInterval(()=>{
      this.setState({
        ...state,
        bars: {
          ...this.state.bars,
          values: this.moveBars(values, numberPicker)
        }
      });
    }, 10000);
  }
  moveBars(values, numberPicker) {
    return moveBars(values, numberPicker);
  }

  createOdds(range) {
    console.log(createOdds)
    this.setState({
      ...this.state,
      numberPicker: createOdds(range)
    })
  }
  maxBars(values) {
    this.setState({
      ...state,
      bars: {...this.state.bars, values: this.state.bars.values.map(value => 99)}
    })
  }
  minBars(values) {
    this.setState({
      ...state,
      bars: {...this.state.bars, values: this.state.bars.values.map(value => 0)}
    })
  }
  componentDidMount() {
    this.createOdds(this.props.range)
  }

  render(){
    console.log(this.state)
    return(
      <Graph
        bars={this.state.bars.values.map((value, i) => {
          return {value: value, color: this.props.colors[i]}
        })}
      />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    colors: state.graphs.colors,
    maxBars: state.graphs.maxBars,
    minBars: state.graphs.minBars,
    range: state.graphs.range
  }
}

export default connect(mapStateToProps)(GraphContainer)
