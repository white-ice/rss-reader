import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import { openModal } from '../../components/modal/index';
import ImporterModal from './importerModal';
import './Rss.scss';

class RssImporter extends Component {
    constructor(props) {
        super(props);
    }

    btnImportClicked() {
        const { arrayRssUrl, error } = this.props.rssImporter;
        this.props.dispatch(openModal({
            content: <ImporterModal arrayRssUrl={ arrayRssUrl } error={ error } />,
            title: 'Import rss url'
        }));
    }

    render() {
        return (
            <div className="rss-importer">
                <div className="BtnImport" >
                    <div className="col-sx-12 center-aligh">
                        <h3>START WITH ONE OF THESE:</h3>
                    </div>
                    <div className="col-sx-12">
                        <div className="btn-import" onClick={::this.btnImportClicked}>
                            <span className="glyphicon glyphicon-download-alt"/>
                            <h3>IMPORT YOUR SUBSCRIPTIONS</h3>
                            <h6>If you are coming from another reader</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RssImporter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    rssImporter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(RssImporter);
