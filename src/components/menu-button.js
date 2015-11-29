import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MenuButton extends Component {
    render() {
        return (
            <div className="menu-button">
                <svg onClick={this.handleTap} x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                <path fill="#444444" d="M3.375,3.875h25.25c1.125,0,2.062,0.938,2.062,2.063s-0.938,2-2.062,2H3.375c-1.125,0-2.063-0.875-2.063-2
                        S2.25,3.875,3.375,3.875z M3.375,13.938h25.25c1.125,0,2.062,0.938,2.062,2.063s-0.938,2.063-2.062,2.063H3.375
                        c-1.125,0-2.063-0.938-2.063-2.063S2.25,13.938,3.375,13.938z M3.375,24.062h25.25c1.125,0,2.062,0.875,2.062,2
                        s-0.938,2.063-2.062,2.063H3.375c-1.125,0-2.063-0.938-2.063-2.063S2.25,24.062,3.375,24.062z"/>
                </svg>
            </div>
        );
    }

    handleTap() {
        console.log('menu button tap');
    }
}
