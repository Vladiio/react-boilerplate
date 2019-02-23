import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div
        style={{
          background:
            this.state.count > 5 ? 'red' : 'black'
        }}
      >
        <h1 className="header">Counter</h1>
        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count - 1
            }))
          }
        >
          Decrement
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default hot(App);
