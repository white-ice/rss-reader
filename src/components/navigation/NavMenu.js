import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavMenu.scss';

class NavMenu extends Component {
    render() {
        return (
            <div className="nav-cont">
                <div className="nav-list">
                    <Link to="/" activeClassName="active">Dashboard</Link>
                </div>
            </div>
        );
    }
}

export default NavMenu;
