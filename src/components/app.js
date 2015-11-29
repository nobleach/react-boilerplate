import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Header from './header';
import styles from '../styles/global.less';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
