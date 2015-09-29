import React from 'react';
import Router from 'react-router';
const Route = Router.Route;
import BrowserHistory from 'react-router/lib/History';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
const IndexRoute = Router.IndexRoute;
import PageBuilder from './PageBuilder';
import PageReader from './PageReader';
import App from './app';

let routes = (
    <Router history={BrowserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PageBuilder}/>
            <Route path="builder" component={PageBuilder}/>
            <Route path="reader" component={PageReader}/>
        </Route>
    </Router>
);


export default routes;
