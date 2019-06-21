import React from 'react';
import { connect } from 'react-redux';
import LoginActions from '../../stores/Login/Actions';
import Header from '../../components/Header';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value ? e.target.value : e.target.checked
        });
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        this.props.submit(email, password);
    };

    render() {
        return (
            <div>
                <Header />
                <form>
                    <input placeholder="Username" type="text" name="email" onChange={this.handleChange} />
                    <input placeholder="Password" type="password" name="password" onChange={this.handleChange} />
                </form>
                <button onClick={this.handleSubmit}>{
                    this.props.loading ? 'Loading' : 'Login'
                }</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.login.loading,
    error: state.login.errors
});

const mapDispatchToProps = {
    submit: (email, password) => LoginActions.login(email, password)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
