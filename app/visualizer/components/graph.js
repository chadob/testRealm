import React from 'react';
import {Bar} from './bar';

export class Graph extends React.Component {
  render() {
    return (
      <div className={this.props.className, "graph"} style={{}}>
        <button onClick={() => this.props.maxBars(this.props.updater)}>PUMP IT UP!!!!</button>
        <button onClick={() => this.props.minBars(this.props.updater)}>chill out...</button>
        <button onClick={() => this.props.regBars(this.props.updater)}>On The Regs</button>

        {this.props.bars.map((bar, idx) =>
          <Bar key={this.props.className + "Bar" + idx} className={this.props.className + "Bar" + idx} value={bar.value} color={bar.color}/>
        )}
      </div>
    );
  }
}
