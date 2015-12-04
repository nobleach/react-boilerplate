import React, { Component } from 'react';
import styles from './styles/product-options.less';

export default class ProductOptions extends Component {
    render() {
        return (
            <div className="product-options-container">
                <select className="product-options-select">
                    {this.props.options.map((option, index) => {
                        return (
                            <option key={`option-${index}`}>
                                {option.decription}
                            </option>
                        );
                    })}
                </select>
                <div className="product-options-error" />
            </div>
        );
    }
}
