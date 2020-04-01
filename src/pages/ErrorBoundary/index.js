import React from 'react';

import './styles.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error-boundary">Something went wrong</h1>;
    }

    return this.props.children;
  };
};

export default ErrorBoundary;
