import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../../containers/Login';
import ChangePassword from '../../containers/ChangePassword';
import ForgotPassword from '../../containers/ForgotPassword';
import MainScreen from '../../containers/MainScreen';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <ProtectedRoute exact path="/" component={MainScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
    </BrowserRouter>
);

export default Router;
