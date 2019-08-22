import { combineReducers } from 'redux'
import cuboid from './cuboid'
import regular from './regular'
import torus from './torus'
import cylinder from './cylinder'

const index = combineReducers({
  cuboid,
  regular,
  torus,
  cylinder
})
export default index;
