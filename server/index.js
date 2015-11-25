import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import Contact from './generated/contact';
import Product from './generated/product';
import routes from './generated/routes';
const hist = require('history');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

// fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = express();
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use((req, res, next) => {
    const location = hist.createLocation(req.path);
    match({
        routes: routes,
        location: location
    }, (err, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (err) {
            console.log(err);
            next(err);
            // res.send(500, error.message);
        } else if (renderProps === null) {
            res.status(404)
            .send('Not found');
        } else {
            res.render('app', {
                app: ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>)
            });
        }
    });
});

app.get('/contact', (request, response) => {
    response.render('app', {
        app: ReactDOMServer.renderToString(<Contact />)
    });
});

app.get('/:productId/product.html', (req, res) => {
    console.log('server rendered');
    let id = req.params.productId;
    let reactHtml = ReactDOMServer.renderToString(<Product productId={id} />);
    res.render('product', {
        product: reactHtml
    });
});

app.listen(port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
