import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './styles/review-stars.less';

export default class ReviewStars extends Component {
    render() {
        if (isNaN(this.props.average)) {
            return(<div />);
        }

        let width = parseInt(this.props.average * 2 * 10) + '%';
        return (
            <div className="stars-container">
                <svg version="1.1" className="stars-background" x="0px" y="0px"
                    viewBox="0 0 65 13" enable-background="new 0 0 65 13">
                    <polygon points="6.501,0.082 8.036,5.016 13.002,5.016 8.984,8.065 10.519,13 6.501,9.95 2.483,13 4.018,8.065 0,5.016 4.966,5.016 "/>
                    <polygon points="19.503,0.082 21.038,5.016 26.004,5.016 21.986,8.065 23.521,13 19.503,9.95 15.485,13 17.02,8.065 13.002,5.016 17.968,5.016 "/>
                    <polygon points="32.505,0.082 34.039,5.016 39.006,5.016 34.988,8.065 36.523,13 32.505,9.95 28.487,13 30.022,8.065 26.004,5.016 30.97,5.016 "/>
                    <polygon points="45.507,0.082 47.041,5.016 52.008,5.016 47.99,8.065 49.525,13 45.507,9.95 41.488,13 43.023,8.065 39.006,5.016 43.973,5.016 "/>
                    <polygon points="58.509,0.082 60.043,5.016 65.01,5.016 60.992,8.065 62.527,13 58.509,9.95 54.49,13 56.025,8.065 52.008,5.016 56.975,5.016 "/>
                </svg>
                <svg version="1.1" className="stars-foreground"
                    viewBox="0 0 65 13" aria-labelledby="title desc">
                    <defs>
                        <clipPath id="clip-right">
                            <rect x="0" y="0" width={width} height="100%" />
                        </clipPath>
                    </defs>
                    <title>Review rating</title>
                    <desc>Rated at an average of {this.props.average} stars</desc>
                    <g style={{clipPath: 'url(#clip-right)'}}>
                        <polygon points="6.501,0.082 8.036,5.016 13.002,5.016 8.984,8.065 10.519,13 6.501,9.95 2.483,13 4.018,8.065 0,5.016 4.966,5.016 "/>
                        <polygon points="19.503,0.082 21.038,5.016 26.004,5.016 21.986,8.065 23.521,13 19.503,9.95 15.485,13 17.02,8.065 13.002,5.016 17.968,5.016 "/>
                        <polygon points="32.505,0.082 34.039,5.016 39.006,5.016 34.988,8.065 36.523,13 32.505,9.95 28.487,13 30.022,8.065 26.004,5.016 30.97,5.016 "/>
                        <polygon points="45.507,0.082 47.041,5.016 52.008,5.016 47.99,8.065 49.525,13 45.507,9.95 41.488,13 43.023,8.065 39.006,5.016 43.973,5.016 "/>
                        <polygon points="58.509,0.082 60.043,5.016 65.01,5.016 60.992,8.065 62.527,13 58.509,9.95 54.49,13 56.025,8.065 52.008,5.016 56.975,5.016 "/>
                    </g>
                </svg>
            </div>
        );
    }
}
