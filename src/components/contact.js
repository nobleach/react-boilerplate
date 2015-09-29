import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Contact extends Component {
    render() {
        return (
            <div className="shmoo">
                My numbah: <a tel="904-445-3029">445-3029</a>
                <br />
                <Link to='/'>Back to home</Link>
            </div>
        )
    }
}
