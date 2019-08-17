import reducer from "../reducers";
import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'

export const store = createStore(reducer);
