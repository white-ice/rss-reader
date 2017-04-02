import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getRssData} from './actions';

class RssFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayRssUrl: this.props.arrayRssUrl
        };
    }

    componentDidMount() {
        const {arrayRssUrl} = this.state;
        this.props.dispatch(getRssData(arrayRssUrl));
    }

    renderRssFeed(item, idx) {
        return (
            <li key={idx} className="rss-feed-item">
                <h3>{item.titleFeed}</h3>
            </li>
        );
    }

    render() {
        const { arrayRssData } = this.props.rssFeed;

        return (
            <ul className="RssFeed">
                <h2>Rss feed</h2>
                { arrayRssData.length ? arrayRssData.map(::this.renderRssFeed) : 'not rss feed'}
            </ul>
        );
    }
}

RssFeed.propTypes = {
    dispatch: PropTypes.func.isRequired,
    arrayRssUrl: PropTypes.array.isRequired,
    rssFeed: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(RssFeed);
