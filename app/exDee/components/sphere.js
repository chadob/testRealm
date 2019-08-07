import React from 'react';

class Sphere extends React.Component {
  render() {
    console.log(this.props.sides)
    return (
      <div className={this.props.className}>
        {
          this.props.sides && this.props.sides.length > 0 && this.props.sides.map( (ring, ringIdx) => {
            return (
              ring && ring.length > 0 && ring.map( (side, sideIdx) => {
                console.log(side)
                return (
                  <div key={"ring"+ringIdx+"side"+sideIdx} className={this.props.className + "Ring" + ringIdx + "Side" + sideIdx} style={this.props.styles["ring" + ringIdx + "side" + sideIdx]}>
                    <div className="top-left-corner">
                    </div>
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
