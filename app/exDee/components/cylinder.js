import React from 'react';

class Cylinder extends React.Component {
  render() {
    const cylinderStyles = {
      cylinder: {
        position: "relative",
        transformStyle: "preserve-3d",
        width: this.props.width,
        height: this.props.height,
        left: "100px",
        top: "100px"
      },
      cylinderSide: {
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
      <div className="cylinder" style={cylinderStyles.cylinder}>
        <div className="front-side cylinder-side" style={{...cylinderStyles.frontSide, ...cylinderStyles.cylinderSide}}></div>
        <div className="left-side cylinder-side" style={{...cylinderStyles.leftSide, ...cylinderStyles.cylinderSide}}></div>
        <div className="top-side cylinder-side" style={{...cylinderStyles.topSide, ...cylinderStyles.cylinderSide}}></div>
        <div className="right-side cylinder-side" style={{...cylinderStyles.rightSide, ...cylinderStyles.cylinderSide}}></div>
        <div className="bot-side cylinder-side" style={{...cylinderStyles.botSide, ...cylinderStyles.cylinderSide}}></div>
        <div className="back-side cylinder-side" style={{...cylinderStyles.backSide, ...cylinderStyles.cylinderSide}}></div>
      </div>
    );
  }
}
export default Cylinder;
