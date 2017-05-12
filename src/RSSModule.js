/**
 * Created by sbot on 11.04.17.
 */
import React, { Component } from 'react';
import './RSSModule.css';
import axios from 'axios';
import RSSEntry from './RSSEntry';

class RSSModule extends Component {

    constructor() {
        super();
        this.state = {
            feedURL: "",
            feedEntries: []
        };
    }

    componentDidMount() {
        this.setState({url: this.props.feedName});
        axios.get(this.props.dataURL)
            .then(res => {
                console.log(res.data)
                const posts = res.data.map(obj => obj);
                console.log(posts)
                this.setState({feedEntries: posts});
            });
        //setInterval(this.timer.bind(this), this.props.refreshRate);
    }



    render() {
        return (
            <div className="rssModule">
                <h2>RSS <small>{this.props.headline}</small></h2>
                {this.state.feedEntries.map(entry =>
                    <RSSEntry key={entry.title} feedheader={entry.title} feedtext={entry.description} posttime={entry.published} feedURL={this.props.feedName} ></RSSEntry>
                )}
            </div>
        );
    }
}

export default RSSModule;