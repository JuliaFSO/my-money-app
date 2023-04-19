import React from 'react'
import createRoot from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import AuthOrApp from './main/authOrApp';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
createRoot.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
, document.getElementById('app'))

reportWebVitals();
