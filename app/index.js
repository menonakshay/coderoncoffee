import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';

import store from 'app/config/store'
import history from 'app/config/history'

import App from 'app/App'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
     ,document.getElementById('root')
)