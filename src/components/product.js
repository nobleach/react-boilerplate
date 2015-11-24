import React, { Component } from 'react';

export default class Product extends Component {
    componentDidMount() {
        console.log(this.props.product);
    }

    render() {
        const imageBase = 'http://ak1.ostkcdn.com/images/products/';
        const product = this.props.product;
        return (
            <div className="product-page">
                <span className="name">{product.name}</span>
                Product ID: {product.id}
                <img className="hero-image" src={imageBase + product.imageMedium1} />
            </div>
        )
    }
}
