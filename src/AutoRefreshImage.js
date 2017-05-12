/**
 * Created by sbothe on 11.04.17.
 */
import React, { Component } from 'react';
import './AutoRefreshImage.css';

class AutoRefreshImage extends Component {

    constructor() {
        super();
        this.state = {
            url: "",
        };
    }
    componentDidMount() {
        this.setState({url: this.props.initialURL});
        setInterval(this.timer.bind(this), this.props.refreshRate);
    }
    timer() {
        this.setState({url: this.props.initialURL});
    }
    render() {
        return (
            <div className="fondGraphImage">
                <img src={this.state.url} width="666" height="500" alt="" />
            </div>
        );
    }
}

export default AutoRefreshImage;