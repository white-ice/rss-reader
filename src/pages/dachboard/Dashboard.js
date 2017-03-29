import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import { LS } from '../../utils/index';
import BtnImport from './components/BtnImport';
import RssLenta from './components/RssLenta';
import './Dashboard.scss';

class Dashboard extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const arrayRss = LS.get('arrayRss');
        console.log('Dashboard props', arrayRss);

        return(
            <div className="Dashboard">
                <div className="row">
                    { !arrayRss ? <BtnImport /> : <RssLenta arrayRss={ arrayRss } /> }

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

export default connect(mapStateToProps)(Dashboard);
