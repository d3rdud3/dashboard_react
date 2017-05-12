/**
 * Created by sbot on 11.04.17.
 */
import React, { Component } from 'react';
import './TwitterModule.css';
import Tweet from './Tweet';

class TwitterModule extends Component {
    render() {
        var indents = [];

        for (var i = 0; i < this.props.tweets.length; i++) {
            indents.push(<Tweet key={i} text={this.props.tweets[i].text} createdby={this.props.tweets[i].user.name} location={this.props.tweets[i].user.location} />);
        }

        return (
            <div className="tweetModule">
                <h2>Twitter <small>Overview</small></h2>
                {indents}
            </div>
        );
    }
}

export default TwitterModule;