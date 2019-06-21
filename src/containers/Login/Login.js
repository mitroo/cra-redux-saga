import React from 'react';
import Header from '../../components/Header';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <span>Login</span>
            </div>
        );
    }
}

export default Login;
