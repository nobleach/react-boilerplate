import React, { Component } from 'react';
import {Link} from 'react-router';
import OverstockLogo from './overstock-logo';
import CartButton from './cart-button';
import MenuButton from './menu-button';
import SearchButton from './search-button';
import styles from './styles/header.less';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <MenuButton />
                <Link className="home-link" to='/'>
                    <OverstockLogo />
                </Link>
                <SearchButton />
                <CartButton />
            </div>
        );
    }
}
