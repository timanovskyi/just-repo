import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from './app/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { App } from './app/components/App';

const store = createStore(reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
