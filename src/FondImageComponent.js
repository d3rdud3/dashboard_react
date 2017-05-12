/**
 * Created by sbothe on 10.05.17.
 */
import React, { Component } from 'react';
import './FondImageComponent.css';
import AutoRefreshImage from "./AutoRefreshImage"

class FondImageComponent extends Component {

    constructor() {
        super();
        this.state = {elements: [], position: 0, current:<AutoRefreshImage refreshRate="1000" initialURL="http://localhost:5000/fondImage/total" />};
        this.state.elements.push(<AutoRefreshImage refreshRate="1000" initialURL="http://localhost:5000/fondImage/total" />)
        this.state.elements.push(<AutoRefreshImage refreshRate="1000" initialURL="http://localhost:5000/fondImage/tech" />)
        this.state.elements.push(<AutoRefreshImage refreshRate="1000" initialURL="http://localhost:5000/fondImage/global" />)
        this.state.elements.push(<AutoRefreshImage refreshRate="1000" initialURL="http://localhost:5000/fondImage/growth" />)
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), this.props.changeInterval);
    }

    timer() {
        this.setState({position:  this.state.position + 1 })
        if(this.state.position <= 3)
        {
            this.setState({current: this.state.elements[this.state.position]});
        }
        else {
            this.setState({position:  0 })
            this.setState({current: this.state.elements[this.state.position]});
        }
    }

    render() {
        return (
            <div>
                {this.state.current}
            </div>
        );
    }
}
export default FondImageComponent;
