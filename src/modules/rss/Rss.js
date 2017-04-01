import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import { LS } from '../../utils/index';
import RssImporter from './RssImporter';
import './Rss.scss';

class Rss extends Component {
    render() {
        const arrayRssUrl = LS.get('arrayRssUrl');
        const { rssImporter } = this.props;

        console.log('Rss render', this.props);

        return (
            <div className="Rss">
                { !arrayRssUrl || arrayRssUrl.length === 0 ? <RssImporter rssImporter={ rssImporter } /> : 'feed rss' }
            </div>
        );
    }
}

Rss.propTypes = {
    rssImporter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        rssImporter: state.rssImporter,
        rssFeed: state.rssFeed
    };
}

export default connect(mapStateToProps)(Rss);
