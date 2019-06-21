import React from 'react';
import Header from '../../components/Header';

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <span>ChangePassword</span>
            </div>
        );
    }
}

export default ChangePassword;
