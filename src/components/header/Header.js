import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">RSS Reader</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
