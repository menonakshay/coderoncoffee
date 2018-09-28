import { combineReducers } from 'redux'
import demo from './demo'
const appReducer = combineReducers({
    demo
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer