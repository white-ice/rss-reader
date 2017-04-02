import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import { LS } from '../../utils/index';
import RssImporter from './components/rssimporter/RssImporter';
import RssFeed from './components/rssfeed/RssFeed';
import './Rss.scss';

class Rss extends Component {
    render() {
        const arrayRssUrl = LS.get('arrayRssUrl');
        const { rssImporter, rssFeed } = this.props;

        return (
            <div className="Rss">
                { !arrayRssUrl || arrayRssUrl.length === 0 ? <RssImporter rssImporter={ rssImporter } /> : <RssFeed arrayRssUrl={ arrayRssUrl } rssFeed={rssFeed} /> }
            </div>
        );
    }
}

Rss.propTypes = {
    rssImporter: PropTypes.object.isRequired,
    rssFeed: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        rssImporter: state.rssImporter,
        rssFeed: state.rssFeed
    };
}

export default connect(mapStateToProps)(Rss);
