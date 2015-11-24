import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';

const app = document.querySelector('#root');
ReactDom.render((
    routes
), app);
