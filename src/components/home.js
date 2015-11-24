import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-route">Home sweet home.</div>
                <Link to={'/about'}>About Us</Link>
                <br />
                <Link to={'/contact'}>Contact Us</Link>
                <br />
                <Link to='815149/product.html'>Gold Watch</Link>
                <br />
                <Link to='815888/product.html'>Silver Watch</Link>
            </div>
        )
    }
}
