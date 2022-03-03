import React, { Component } from 'react';
import Error from '../error.component';

interface IState {
  hasError: boolean;
}

class PrivateErrorBoundary extends Component<Record<string, any>, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) return <Error />;
    return this.props.children;
  }
}

export default PrivateErrorBoundary;
