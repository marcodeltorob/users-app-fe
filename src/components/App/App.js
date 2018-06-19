import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

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