import React from 'react';
import "../styles/wrapperStyles.css";
import CuboidContainer from "../containers/cuboidContainer";
import RegularContainer from "../containers/regularContainer";
import SphereContainer from "../containers/sphereContainer";
import TorusContainer from "../containers/torusContainer";
//replace cuboid with anything you need
class Wrapper extends React.Component {

  render() {
    return (
      <div className="exDee-wrapper">
        <TorusContainer />
      </div>
    );
  }
}
export default Wrapper;
