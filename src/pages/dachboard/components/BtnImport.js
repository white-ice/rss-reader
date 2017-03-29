import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindAll} from 'lodash';

import { openModal } from '../../../components/modal/index';
import ImportModal from './ImportModal';
import '../Dashboard.scss';

class BtnImport extends Component {
    constructor(props) {
        super(props);

        bindAll(this, ['btnImportClicked']);
    }

    btnImportClicked() {
        this.props.dispatch(openModal({
            content: <ImportModal />,
            title: 'Import'
        }));
    }

    render() {
        return (
            <div className="BtnImport" >
                <div className="col-sx-12 center-aligh">
                    <h3>START WITH ONE OF THESE:</h3>
                </div>
                <div className="col-sx-12">
                    <div className="btn-import" onClick={this.btnImportClicked}>
                        <span className="glyphicon glyphicon-download-alt"/>
                        <h3>IMPORT YOUR SUBSCRIPTIONS</h3>
                        <h6>If you are coming from another reader</h6>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(BtnImport);
