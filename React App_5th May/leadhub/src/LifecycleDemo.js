import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Demo</h1>

        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;