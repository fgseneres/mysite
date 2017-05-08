import React, { Component } from 'react';
import './App.css';
import './css/global.css';
import './css/simple-sidebar.css';

import Navigation from './Templates/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
export default App;
