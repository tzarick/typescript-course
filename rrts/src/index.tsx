import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// can specify Props (P) interface by using Component's generic type
class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: ++this.state.counter });
  };

  onDecrement = (): void => {
    this.setState({ counter: --this.state.counter });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
