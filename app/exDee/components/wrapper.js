import React from 'react';
import "../styles/wrapperStyles.css";
import CuboidContainer from "../containers/cuboidContainer";
import RegularContainer from "../containers/regularContainer";
//replace cuboid with anything you need
class Wrapper extends React.Component {

  render() {
    return (
      <div className="exDee-wrapper">
        <CuboidContainer />
        <RegularContainer />
      </div>
    );
  }
}
export default Wrapper;
