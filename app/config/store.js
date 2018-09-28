import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import logger from 'redux-logger'
// import { createLogger } from 'redux-logger'

import rootReducer from '../redux/reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV === "development") {
    // const loggerMiddleware = createLogger({
    //     collapsed: (getState, action, logEntry) => !logEntry.error
    // })
    middlewares.push(logger)
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store