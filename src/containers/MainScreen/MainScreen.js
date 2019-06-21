import React from 'react';
import Header from '../../components/Header';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <span>MainScreen</span>
            </div>
        );
    }
}

export default MainScreen;
