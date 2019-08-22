import React from 'react';

class Cuboid extends React.Component {
  render() {
    console.log(this.props.styles)
    return (
      <div className={this.props.className} style={this.props.styles[this.props.className]}>
        {
          this.props.sides.map((side, sideIdx) => {
            return (
              <div key={"side"+sideIdx} className={this.props.className + "Side" + sideIdx} style={this.props.styles["side" + sideIdx]}>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Cuboid;
