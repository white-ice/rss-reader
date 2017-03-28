// project structure
import React, { Component, PropTypes } from 'react';

import Header from './components/header/Header';
import NavMenu from './components/navigation/NavMenu';
import Modal from './components/modal/Modal';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Header />
                    <NavMenu />
                    <Modal />
                    <div className="container">
                        { this.props.children }
                        { process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null }
                    </div>
                </div>
            </div>
        );
    }
}
