import React, { Component } from 'react';
import {Link} from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                About us.
                <br />
                <Link to='/'>Back to home</Link>
            </div>
        )
    }
}
