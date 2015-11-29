import React, { Component } from 'react';

export default class SearchButton extends Component {
    render() {
        return (
            <div className="search-button">
                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                    <path fill="#444444" d="M30,26.062l-4.938-4.938c1.312-2,2.062-4.375,2.062-6.938c0-7.188-5.812-13-12.938-13 c-7.188,0-13,5.813-13,13c0,7.125,5.813,12.938,13,12.938c2.563,0,4.938-0.75,6.938-2.062L26.062,30 c1.063,1.062,2.813,1.062,3.938,0C31.064,28.875,31.064,27.125,30,26.062L30,26.062z M14.188,23.438c-5.125,0-9.25-4.125-9.25-9.25 c0-5.125,4.125-9.25,9.25-9.25c5.125,0,9.25,4.125,9.25,9.25C23.438,19.312,19.312,23.438,14.188,23.438z"/>
                </svg>
            </div>
        );
    }
}
