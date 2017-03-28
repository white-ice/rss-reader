import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    static path = '/';

    render() {
        return (

            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">RSS Reader</Link>
                        </div>
                        {/*<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">*/}
                            {/*<ul className="nav navbar-nav">*/}
                                {/*<li><Link to="/">Главная</Link></li>*/}
                                {/*<li><Link to="/shop">Магазин</Link></li>*/}
                                {/*<li><Link to="/contact">Котакты</Link></li>*/}
                                {/*<li><Link to="/list">Список</Link></li>*/}
                                {/*<li><Link to="/error">Страница ошибки</Link></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
