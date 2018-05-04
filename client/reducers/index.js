import {combineReducers} from 'redux'

import leaves from './leaves'
import smalltabletfound from './smalltablet'
import largetablet from './largetablet'

export default combineReducers({
  leaves,
  smalltabletfound,
  largetablet
})
