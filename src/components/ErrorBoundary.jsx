import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform other error-handling actions here
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or component here
      return <div>Oops! Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;