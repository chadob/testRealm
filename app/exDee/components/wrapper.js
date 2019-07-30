import React from 'react';
import "../styles/wrapperStyles.css";
import CuboidContainer from "../containers/cuboidContainer";
import RegularContainer from "../containers/regularContainer";
import SphereContainer from "../containers/sphereContainer";
//replace cuboid with anything you need
class Wrapper extends React.Component {

  render() {
    return (
      <div className="exDee-wrapper">
        <SphereContainer />
      </div>
    );
  }
}
export default Wrapper;
