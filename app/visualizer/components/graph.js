import React from 'react';
import {Bar} from './bar';

export class Graph extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className={this.props.className, "graph"} style={{}}>
        {this.props.bars.map((bar, idx) =>
          <Bar key={this.props.className + "Bar" + idx} className={this.props.className + "Bar" + idx} value={bar.value} color={bar.color}/>
        )}
      </div>
    );
  }
}
