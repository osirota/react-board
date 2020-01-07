import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import store from './store.js';
import Board from './components/Board/Board';
import registerServiceWorker from './registerServiceWorker';


render(
    <Provider store={store}>
        <Router>
            <Board />
        </Router>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
