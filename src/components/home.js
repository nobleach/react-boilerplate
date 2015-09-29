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
            </div>
        )
    }
}
