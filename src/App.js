import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment} className='btn btn-success' disabled={this.state.count === 10}>+</button>
        <button onClick={this.decrement} className='btn btn-warning' disabled={this.state.count === 0}>-</button>
        <h1>The value is {this.state.count}</h1>
      </div>
    )
  }
}


const MyVersion = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>The count is {count}</h1>
    </div>
  )
}

export default MyVersion;
