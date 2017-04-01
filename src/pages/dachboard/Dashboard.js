import React, {Component} from 'react';

import Rss from '../../modules/rss/Rss';
import './Dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <div className="row">
                    <Rss />
                </div>
            </div>
        );
    }
}

export default Dashboard;
