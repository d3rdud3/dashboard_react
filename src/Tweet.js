/**
 * Created by sbothe on 11.04.17.
 */
import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
    render() {
        return (

        <div className="feedEntry">
            <div>
                <span>{this.props.text}</span>
            </div>
            <div className="feedfooter">
                <img src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png" height="20" width="20" alt=""/>
                <span className="feedSourceQuote"> - {this.props.createdby}</span>
                <span className="feedSourceQuote"> {this.props.location} </span>
            </div>
        </div>
        );
    }
}

export default Tweet;

