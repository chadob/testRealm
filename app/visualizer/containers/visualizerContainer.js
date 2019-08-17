import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { Provider } from 'react-redux';
import { store} from "../store";
import GraphContainer from './GraphContainer'

class VisualizerContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <GraphContainer />
      </Provider>
    )
  }
}
export default VisualizerContainer;
