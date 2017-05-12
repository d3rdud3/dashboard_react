/**
 * Created by sbothe on 09.05.17.
 */
import React, { Component } from 'react';
import './RSSEntry.css';

class RSSEntry extends Component {

    render() {
        return (
            <div className="feedEntry">
                <div>
                    <span className="feedheader">{this.props.feedheader}</span>
                </div>
                <div>
                    <span>{this.props.feedtext}</span>
                </div>
                <div className="feedfooter">
                    <img src="http://www.kbv.de/images/contentbilder_m/200px-Feed-icon.svg.png" height="20" width="20" alt=""/>
                    <span className="feedSourceQuote"> - {this.props.feedURL}</span>
                    <span className="feedSourceQuote"> {this.props.posttime} </span>
                </div>
            </div>
        );
    }
}

export default RSSEntry;