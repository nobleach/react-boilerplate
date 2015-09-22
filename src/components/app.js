import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.less';


class App extends Component {
    render() {
        return (
            <div className={styles.big + ' ' + styles.red}>Goodbye Real Cruel World!</div>
        );
    }
}

export default CSSModules(App, styles);
