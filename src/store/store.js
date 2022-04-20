import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { feedbackReducer } from "./feedback.reducer.js";
import { modalReducer } from "./modal.reducer.js"

const rootReducer = combineReducers({
    feedbackModule: feedbackReducer,
    modalModule: modalReducer,
})

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))