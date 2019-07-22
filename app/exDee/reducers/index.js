import { combineReducers } from 'redux'
import cuboid from './cuboid'
import regular from './regular'

const index = combineReducers({
  cuboid,
  regular
})
export default index;
