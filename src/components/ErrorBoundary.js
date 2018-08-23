import React, { Component } from 'react';

//the following component comes from the React documentation (https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{color: 'red'}}>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
