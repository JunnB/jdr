import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import characterReducer from '../reducers/characterReducer';
import modalReducer from '../reducers/modalReducer';

const store = createStore(
  combineReducers({
    character: characterReducer,
    modal: modalReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;
