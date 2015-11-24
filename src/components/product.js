import React, { Component } from 'react';
import {Link} from 'react-router';

// fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Product extends Component {
    constructor(props) {
        super(props);
        if (this.props.product) {
            this.state = {product: props.product};
        } else {
            this.state = {
                product: {
                    name: '',
                    id: 0,
                    imageMedium1: ''
                }
            };
        }
    }

    componentDidMount() {
        let id = this.props.params.productId;
        let url = `http://www.overstock.com/api/product.json?prod_id=${id}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((product) => {
            this.setState({
                product: product
            });
        });
    }

    render() {
        const imageBase = 'http://ak1.ostkcdn.com/images/products/';
        const product = this.state.product;
        return (
            <div className="product-page">
                <span className="name">{product.name}</span>
                Product ID: {product.id}
                <img className="hero-image" src={imageBase + product.imageMedium1} />
                <br />
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
}
