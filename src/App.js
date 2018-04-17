import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import GetStarted from './components/GetStarted'
import ImageHome from './components/ImageHome'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Nav />
              <div className="center">
                <ImageHome />
                    <div className="p-container">
                      <p>while everyone else is searching....you could be submitting...</p>
                    </div>
                <GetStarted />
                <Footer />
                  
              </div>
              
      </div>
    );
  }
}

export default App;
