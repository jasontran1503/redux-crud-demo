import postReducer from 'features/Post/redux/reducer';
import { combineReducers, compose, createStore } from 'redux';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
