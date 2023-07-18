import { createStore, combineReducers } from 'redux';
import post from '../module/post';
const rootReducer = combineReducers({
  post,
});

const store = createStore(rootReducer);

export default store;
