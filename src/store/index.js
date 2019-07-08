import { createStore, applyMiddleware, combineReducers } from 'redux'
import middleWare from './middleWare'
import forecast from './forecast'
import search from './search'

const store = createStore(combineReducers({forecast, search}), applyMiddleware(middleWare))

export default store