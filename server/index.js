import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router'
import Contact from './generated/contact';
import Product from './generated/product';
mport routes from './generated/routes';

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

// Routes
app.get('/', (rec, res) => {

});

app.get('/contact', (request, response) => {
    response.render('contact', {
        app: ReactDOMServer.renderToString(<Contact />)
    });
});

app.get('/:productId/product.html', (req, res) => {
    let id = req.params.productId;
    let url = `http://www.overstock.com/api/product.json?prod_id=${id}`;

    fetch(url).then((response) => {
        return response.json();
    }).then((product) => {
        res.render('product', {
            product: ReactDOMServer.renderToString(<Product product={product} />)
        });
    });
});

app.listen(port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
