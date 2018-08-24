import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jeff',
    }
  }

  handleNameUpdate() {
    axios.get('/api/name')
      .then((res) => {
        this.setState({ name: res.data })
      })
      .catch((err) => {
        console.log(`BERRORS `, err);
      })
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleNameUpdate()}>Update Name</button>
        <h1>My name: {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
