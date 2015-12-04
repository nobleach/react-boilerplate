import React, { Component } from 'react';
import {Link} from 'react-router';
import ProductOptions from './product-options';
import ReviewStars from './review-stars';

// fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                id: 0,
                imageMedium1: '',
                options: []
            }
        };
    }

    componentDidMount() {
        console.log('componentDidMount called');
        let id = this.props.params.productId;
        this.fetchProduct(id).then( (product) => {
            this.setState({
                product: product
            });
        });
    }

    fetchProduct(id) {
        let url = `http://www.overstock.com/api/product.json?prod_id=${id}`;

        return fetch(url).then((response) => {
            return response.json();
        });
    }

    render() {
        const imageBase = 'http://ak1.ostkcdn.com/images/products/';
        const product = this.state.product;
        console.log(product);
        return (
            <div className="product-page">
                <img className="hero-image" src={imageBase + product.imageMedium1} />
                <span className="name">{product.name}</span>
                {product.options.length > 1 ?
                    <ProductOptions options={product.options} />
                    : null
                }
                <ReviewStars average="3.4" />
            </div>
        );
    }
}
