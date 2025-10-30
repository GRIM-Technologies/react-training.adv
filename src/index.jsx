import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/index.css';

import userReducer from './reducers/userReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
});

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Concurrent from './pages/Concurrent';
import State from './pages/State';
import Hooks from './pages/Hooks';
import OptimisticUpdates from './pages/OptimisticUpdates';
import Debugging from './pages/Debugging';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  applyMiddleware;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="concurrent" element={<Concurrent />} />
            <Route path="state" element={<State />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="optimistic-updates" element={<OptimisticUpdates />} />
            <Route path="debugging" element={<Debugging />} />
            {/* Catch all - replace with a NotFound component if desired */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
