import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
let history = createHistory();
import About from './about';
import Contact from './contact';
import Home from './home';
import App from './app';
import Product from './product';

let routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
            <Route path=":store/:seoName/:productId/product.html" component={Product} />
        </Route>
    </Router>
);


export default routes;
