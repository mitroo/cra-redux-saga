import React from 'react';
import Header from '../../components/Header';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <span>ForgotPassword</span>
            </div>
        );
    }
}

export default ForgotPassword;
