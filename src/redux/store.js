import { createStore, applyMiddleware } from 'redux'
import { gameReducer } from 'src/redux/gameReducer'
import thunk from 'redux-thunk'

export const store = createStore(gameReducer, applyMiddleware(thunk))
