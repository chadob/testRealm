import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Wrapper from "../app/exDee/components/wrapper";
import "./styles/app.css";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="app">
        <Wrapper />
      </div>
    );
  }
}

export default hot(module)(App);
