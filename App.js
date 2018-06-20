import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import initial from './data/initial';
import reducer from './data/reducer';

import Counter from './containers/Counter';

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;