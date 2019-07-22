import React from 'react';

class Cuboid extends React.Component {
  render() {
    const cuboidStyles = {
      cuboid: {
        position: "relative",
        transformStyle: "preserve-3d",
        width: this.props.width,
        height: this.props.height,
        left: "100px",
        top: "100px"
      },
      cuboidSide: {
        position: "absolute",
        outline: "2px solid black"
      },
      frontSide: {
        background: "red",
        height: this.props.height,
        width: this.props.width,
        transform: "rotateY(180deg) translateZ(" + 0 + "px)"
      },
      leftSide: {
        background: "red",
        height: this.props.height,
        width: this.props.length,
        transformOrigin: "center left",
        transform: "rotateY(90deg) translateZ(" + 0 + "px)"
      },
      topSide: {
        background: "red",
        height: this.props.length,
        width: this.props.width,
        transformOrigin: "top center",
        transform: "rotateX(270deg) translateZ("+ 0 + "px)"
      },
      rightSide: {
        background: "red",
        height: this.props.height,
        width: this.props.length,
        transformOrigin: "center left",
        transform: "rotateY(270deg) translateZ(" + -1 * this.props.width + "px) translateX(" + -1 * this.props.length + "px)"
      },
      botSide: {
        background: "red",
        height: this.props.length,
        width: this.props.width,
        transformOrigin: "top center",
        transform: "rotateX(90deg) translateY(" +  -1 * this.props.length + "px) translateZ(" + -1 * this.props.height + "px)"
      },
      backSide: {
        background: "red",
        height: this.props.height,
        width: this.props.width,
        transform: "rotateY(0deg) translateZ(" + -1 * this.props.length + "px)"
      }
    }
    return (
      <div className="cuboid" style={cuboidStyles.cuboid}>
        <div className="front-side cuboid-side" style={{...cuboidStyles.frontSide, ...cuboidStyles.cuboidSide}}></div>
        <div className="left-side cuboid-side" style={{...cuboidStyles.leftSide, ...cuboidStyles.cuboidSide}}></div>
        <div className="top-side cuboid-side" style={{...cuboidStyles.topSide, ...cuboidStyles.cuboidSide}}></div>
        <div className="right-side cuboid-side" style={{...cuboidStyles.rightSide, ...cuboidStyles.cuboidSide}}></div>
        <div className="bot-side cuboid-side" style={{...cuboidStyles.botSide, ...cuboidStyles.cuboidSide}}></div>
        <div className="back-side cuboid-side" style={{...cuboidStyles.backSide, ...cuboidStyles.cuboidSide}}></div>
      </div>
    );
  }
}
export default Cuboid;
