import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
let history = createHistory();
import About from './components/about';
import Contact from './components/Contact';
import Home from './components/home';
import App from './components/app';
import Product from './components/product';

const app = document.querySelector('#root');
ReactDom.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
            <Route path=":store/:seoName/:productId/product.html" component={Product} />
        </Route>
    </Router>
), app);
