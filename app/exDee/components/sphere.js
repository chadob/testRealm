import React from 'react';

class Sphere extends React.Component {
  render() {
    return (
      <div className={this.props.className} style={this.props.styles[this.props.className]}>
        {
          this.props.sides && this.props.sides.length > 0 && this.props.sides.map( (ring, ringIdx) => {
            return (
              ring && ring.length > 0 && ring.map( (side, sideIdx) => {
                return (
                  <div key={"ring"+ringIdx+"side"+sideIdx} className={this.props.className + "Ring" + ringIdx + "Side" + sideIdx} style={this.props.styles["ring" + ringIdx + "side" + sideIdx]}>

                  </div>
                )
              })
            )
          })
        }
      </div>
    );
  }
}
export default Sphere;
