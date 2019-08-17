import React from 'react';
export class Bar extends React.Component {
  render() {
    return (
      <div className={this.props.className, "bar"} style={{
        height: this.props.value +"%",
        backgroundColor: this.props.color
      }}>
      </div>
    );
  }
}
