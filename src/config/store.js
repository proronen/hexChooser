import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import hexReducer from '../reducers/hexReducer';
 console.log("hexReducer");
 console.log(hexReducer);
const rootReducer = combineReducers({
    hexReducer
});

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : null
    )
)

export default store;