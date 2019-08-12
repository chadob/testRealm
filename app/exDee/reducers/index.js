import { combineReducers } from 'redux'
import cuboid from './cuboid'
import regular from './regular'
import torus from './torus'

const index = combineReducers({
  cuboid,
  regular,
  torus
})
export default index;
