import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('http://130.74.166.217:5000/user', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          users: result,
        });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {this.state.users.map(user => {
            return (
              <a
                key={user.ID}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.Name}
              </a>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
