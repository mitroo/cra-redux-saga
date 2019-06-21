import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px' }}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/change-password">ChangePassword</Link>
                <Link to="/forgot-password">ForgotPassword</Link>
            </div>
        );
    }
}

export default Header;
