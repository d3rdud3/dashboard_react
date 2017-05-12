import React, { Component } from 'react';
import TwitterModule from './TwitterModule';
import './App.css';
import FondImageComponent from './FondImageComponent'
import ServerStateOverview from './ServerStateOverview'
import RSSModule from './RSSModule'
import io from 'socket.io-client'
let socket = io(`http://127.0.0.1:5000`)

class App extends Component {

    currentTweets =[];

    constructor() {
        super()
        this.state = {tweets: [], elements: [], position: 0, current:<TwitterModule  tweets={this.currentTweets} />};
        this.state.elements.push(<TwitterModule  tweets={this.currentTweets} />)
        this.state.elements.push(<RSSModule refreshRate='3000' headline="Heise1" feedName="http://www.heise.de" dataURL="http://localhost:5000/rss/heise" />)
        this.state.elements.push(<TwitterModule  tweets={this.currentTweets} />)
        this.state.elements.push(<RSSModule refreshRate='3000' headline="Die Welt" feedName="http://www.welt.de" dataURL="http://localhost:5000/rss/welt" />)
        this.state.elements.push(<TwitterModule  tweets={this.currentTweets} />)
        this.state.elements.push(<RSSModule refreshRate='3000' headline="IPhoneblog" feedName="http://www.iphoneblog.de" dataURL="http://localhost:5000/rss/iphoneblog" />)
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), 10000);

        socket.on(`my response`, data => {
            if(this.currentTweets.length > 5)
            {
                this.currentTweets.shift();
            }
            this.currentTweets.push(data);
            this.setState({tweets: this.currentTweets});
        })
    }

    timer() {
        this.setState({position:  this.state.position + 1 })
        if(this.state.position <= 6)
        {
            this.setState({current: this.state.elements[this.state.position]});
        }
        else {
            this.setState({position:  0 })
            this.setState({current: this.state.elements[this.state.position]});
        }
    }

    /*
    sendMessage1 = message => {
        socket.emit('firstEvent',"firstEvent")
    }
    */

    /*
    sendMessage2 = message => {
        socket.emit('myEvent',"myEvent")
    }
    */
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-12 headline">
              <h1>Dashboard <small>app</small></h1>
                <hr/>
            </div>
          </div>
          <div className="row">
              <div className="col-xs-4 col-md-4">
                  {this.state.current}
              </div>
              <div className="col-xs-3 col-md-5">
                  <div>
                  <h2 className="headline">Fond <small>Overview</small></h2>
                     <FondImageComponent changeInterval="10000"/>
                  </div>
              </div>
              <div className="col-xs-2 col-md-3">
                  <ServerStateOverview />
              </div>
          </div>
        </div>
    );
  }
}

export default App;

