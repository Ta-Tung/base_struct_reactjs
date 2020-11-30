
import { createStore } from 'redux';
import rootReducer from './reducers'

const configureStore = () => {
  // confict redux
  const store = createStore(rootReducer)

  return store;
};

export default configureStore();
