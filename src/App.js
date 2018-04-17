import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import GetStarted from './components/GetStarted'
import ImageHome from './components/ImageHome'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Nav />
              <div className="center">
                <ImageHome />
                  <div>
                    <p>while everyone else is searching....you could be submitting..</p>
                  </div>
                <GetStarted />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
