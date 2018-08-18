
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = new createStore(reducer, applyMiddleware(thunk))

export default store