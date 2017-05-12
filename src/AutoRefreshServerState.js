/**
 * Created by sbothe on 11.04.17.
 */
import React, { Component } from 'react';
import './AutoRefreshServerState.css';
import axios from 'axios';

class AutoRefreshServerState extends Component {

    constructor() {
        super();
        this.state = {
            responseState: "not checked",
        };
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), this.props.refreshRate);
    }

    timer() {
        // fetch the response from the given URL
        axios.get(this.props.url).then(function (response) {
            if(response.data === "up")
            {
                this.setState({responseState: "alive"});
            }
            else{
                this.setState({responseState: "down"});
            }
        }.bind(this)).catch(function (error) {

        });
    }

    render() {
        return (
            <div className="serverStateElement">
                <div className="serverStateDescription">
                    <span className="serverState">{this.state.responseState}</span>
                </div>
            </div>
        );
    }
}
export default AutoRefreshServerState;
