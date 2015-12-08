import React, { Component } from 'react';
import ReviewStars from './review-stars';
import styles from './styles/search-result-tile.less';

export default class SearchResultTile extends Component {
    render() {
        let result = this.props.result;
        return (
            <div className="search-result-tile">
                <img className="search-product-image" src={`http://ak1.ostkcdn.com/images/products/${result.imageMedium1}`} alt="" />
                <div className="search-result-title fade">{result.name}</div>
                <ReviewStars average={result.reviews} />
            </div>
        );
    }
}
