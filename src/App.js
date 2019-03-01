import React, { PureComponent } from 'react';
import './App.css';

// Components
import Routes from './routes';
import PreLoader from './components/PreLoader';

class App extends PureComponent {
  state = {
    isFullyLoaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isFullyLoaded: true,
      });
    }, 3000);
  }

  render() {
    const { isFullyLoaded } = this.state;

    return (
      <div className="App">{!isFullyLoaded ? <PreLoader /> : <Routes />}</div>
    );
  }
}

export default App;
