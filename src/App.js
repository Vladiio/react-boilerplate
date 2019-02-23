import React from 'react';
import './App.css';

console.log(module);

class App extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div>
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

export default App;
