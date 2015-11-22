import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Contact from './generated/contact';
import Product from './generated/product';

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
app.get('/contact', (request, response) => {
    response.render('app', {
        app: ReactDOMServer.renderToString(<Contact />)
    });
});

app.get('/:productId/product.html', (req, res) => {
    let id = req.params.productId;

    res.render('product', {
        product: ReactDOMServer.renderToString(<Product productId={id} />)
    });
});

app.listen(3000, () => console.log('Server running'));
