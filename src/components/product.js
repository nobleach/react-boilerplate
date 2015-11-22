import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div className="product-page">
                Product ID: {this.props.productId}
            </div>
        )
    }
}
