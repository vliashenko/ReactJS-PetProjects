import React, { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

class ErrorBoundary extends Component {

    state = {
        error: false
    }
    
    // меняет внутренний стейт при срабатывании ошибки, ошибки через предохранитель
    // static getDerivatedStateFromError(error) {
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) {
            return (
                <ErrorMessage></ErrorMessage>
            );
        }

        return this.props.children;
        
    }
}

export default ErrorBoundary;