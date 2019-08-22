import React from 'react';

class Regular extends React.Component {
  render() {
    return (
      <div className="this.props.className" style={this.props.styles[this.props.className]}>
        {
          this.props.sides && this.props.sides.length > 0 && this.props.sides.map( (side, idx) => {
            return (
              <div key={idx} className={this.props.className + "Side" + idx} style={this.props.styles["side" + idx]}>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Regular;
