import React from 'react';
import ReactDom from 'react-dom';
import {Router} from 'react-router';
import { createHistory } from 'history';
let history = createHistory();
import routes from './routes';

const app = document.querySelector('#root');
ReactDom.render((
    <Router history={history}>
        {routes}
    </Router>
), app);
