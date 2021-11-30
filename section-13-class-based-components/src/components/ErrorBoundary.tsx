import { Component } from 'react';

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<{}, State> {
    constructor() {
        super({});
        this.state = { hasError: false };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.debug(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <div>Something wrong happened</div>;
        }
        return this.props.children;
    }
}
