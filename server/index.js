import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Contact from './generated/contact';

const app = express();

app.get('/contact', (request, response) => {
    response.send(ReactDOMServer.renderToString(<Contact />));
});

app.listen(3000, () => console.log('Server running'));
