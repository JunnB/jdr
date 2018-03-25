import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import characterReducer from '../reducers/characterReducer';
import modalReducer from '../reducers/modalReducer';
import gameReducer from '../reducers/gameReducer';

const store = createStore(
  combineReducers({
    character: characterReducer,
    modal: modalReducer,
    game: gameReducer,
  }),
  applyMiddleware(
    thunk
  )
);

export default store;
