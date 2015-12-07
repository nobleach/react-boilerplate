import React, { Component } from 'react';
import SearchResultTile from './search-result-tile';
import {default as results} from './__tests__/__fixtures__/search-results';
import styls from './styles/search-results.less';

export default class SearchResults extends Component {
    render() {
        return (
            <div className="search-results">
                {results.products.products.map((result, index) => {
                    return (
                        <SearchResultTile result={result} />
                    )
                })}
            </div>
        );
    }
}
