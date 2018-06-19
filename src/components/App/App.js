import React, { Component } from 'react';
import './App.css';
import Users from './../Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Users</h2>
        <Users/>
      </div>
    );
  }
}   

export default App;