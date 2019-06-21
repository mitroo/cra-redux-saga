import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, token, ...rest } = this.props;
        if (token) {
            return <Route {...rest} component={Component} />;
        }
        return <Route {...rest} render={() => <Redirect to="/login" />} />;
    }
}

export default ProtectedRoute;
