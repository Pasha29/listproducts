import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import authReducer from './authReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    auth: authReducer,
    // products: productsReducer,
    // product: productReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;