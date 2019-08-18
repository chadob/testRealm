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
    this.regBars = this.regBars.bind(this);
    this.state = {
      numberPicker: [],
      bars: {
        values: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
      }
    }
  }
  timedAdjust(values, numberPicker) {
    var newValues;
    this.setState({
      updater: setInterval(()=>{
        newValues = this.moveBars(values,numberPicker)
        this.setState({
          ...this.state,
          bars: {
            ...this.state.bars,
            values: newValues
          }
        });
      }, 500)
    });
  }
  moveBars(values, numberPicker) {
    return moveBars(values, numberPicker);
  }
//creates the numberpicker array, and once it is added to state,
//makes an auto updater to the visualizer
  createOdds(range) {
    this.setState({
      ...this.state,
      numberPicker: createOdds(range)
    }, () => this.timedAdjust(this.state.bars.values, this.state.numberPicker)
    )
  }

  maxBars(updater) {
    clearTimeout(updater);
    this.setState({
      ...this.state,
      bars: {...this.state.bars, values: this.state.bars.values.map(value => 99)}
    })
  }
  minBars(updater) {
    clearTimeout(updater);
    this.setState({
      ...this.state,
      bars: {...this.state.bars, values: this.state.bars.values.map(value => 0)}
    })
  }
  regBars(updater) {
    this.timedAdjust(this.state.bars.values, this.state.numberPicker);
  }
  componentDidMount() {
    this.createOdds(this.props.range)
  }

  render(){
    return(
      <Graph
        updater={this.state.updater}
        maxBars={this.maxBars}
        minBars={this.minBars}
        regBars={this.regBars}
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
