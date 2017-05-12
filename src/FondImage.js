/**
 * Created by sbothe on 11.04.17.
 */
import React, { Component } from 'react';
import './FondImage.css';

class FondImage extends Component {


    constructor() {
        super()
        this.state = {currentCount:0};
    }

    timer(){
        this.setState({currentCount: 0})
    };

    componentDidMount() {
        var intervalId = setInterval(this.timer.bind(this), 60000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    
    render() {
        return (
            <div>
                <img src="http://localhost:5000/fondImage/total" width="444" height="333" alt="">
                </img>
            </div>
        );
    }
}

export default FondImage;