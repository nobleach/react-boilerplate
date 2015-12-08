import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import Contact from './generated/contact';
import Product from './generated/product';
import routes from './generated/routes';
const hist = require('history');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;

// fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = express();
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, '/views/layouts'),
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/:productId/product.html', (req, res) => {
//     console.log('server rendered');
//     let id = req.params.productId;
//     const initialState = {
//         id: req.params.productId
//     };
//     const store = createStore((state=initialState) => state);
//     let reactHtml = ReactDOMServer.renderToString(
//         <Provider store={store}>
//             <Product productId={id} />
//         </Provider>
//     );
//     res.render('product', {
//         product: reactHtml,
//         initialState: JSON.stringify(initialState)
//     });
// });

app.use((req, res, next) => {
    const location = hist.createLocation(req.url);
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
            let markup = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);
            res.render('app', {
                app: markup
            });
        }
    });
});

app.get('/contact', (request, response) => {
    response.render('app', {
        app: ReactDOMServer.renderToString(<Contact />)
    });
});

app.listen(port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
