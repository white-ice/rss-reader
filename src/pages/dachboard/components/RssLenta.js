import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';

import {getRssData} from '../actions';
import '../Dashboard.scss';

class RssLenta extends Component {
    constructor(props) {
        super(props);

        bindAll(this, ['loadData']);

        this.loadData();
    }

    loadData() {
        const { arrayRss } = this.props;

        this.props.dispatch(getRssData(arrayRss));
    }

    render() {
        return (
            <div className="RssLenta">
                <h2>Rss Lenta</h2>
            </div>
        );
    }
}

RssLenta.propTypes = {
    dispatch: PropTypes.func.isRequired,
    arrayRss: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(RssLenta);
