import React from 'react';
import ReactDom from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import About from './about';
import Contact from './contact';
import Home from './home';
import App from './app';
import Product from './product';
import SearchResults from './search-results';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path=":productId/product.html" component={Product} />
        <Route path="search/shoes" component={SearchResults} />
    </Route>
);


export default routes;
