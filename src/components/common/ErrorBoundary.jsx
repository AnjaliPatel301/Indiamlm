import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

/**
 * Top-level error boundary. Catches render-time exceptions in any
 * page or component tree below it and shows a recovery screen
 * instead of a blank white page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production this would report to an error tracking service.
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-surface-base px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
            <AlertTriangle size={26} />
          </span>
          <h1 className="text-2xl font-semibold text-ink-100">Something went wrong</h1>
          <p className="max-w-md text-sm text-ink-400">
            We hit an unexpected error loading this page. Try refreshing, or head back to the
            homepage.
          </p>
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
