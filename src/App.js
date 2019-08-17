import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Wrapper from "../app/exDee/components/wrapper";
import VisualizerContainer from "../app/visualizer/containers/visualizerContainer"
import "./styles/app.css";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="app">
        <VisualizerContainer />
      </div>
    );
  }
}

export default hot(module)(App);
