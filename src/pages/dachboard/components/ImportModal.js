import React, {Component, PropTypes} from 'react';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import { LS } from '../../../utils/index';
import {closeModal} from '../../../components/modal/index';
import Input from '../../../components/ui/input/Input';
import {addRss, getRssLS, deleteRss} from '../actions';
import '../Dashboard.scss';

class ImportModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };

        bindAll(this, ['close', 'inputOnChenge', 'addRssUrl', 'renderRssList', 'deleteRssItem', 'save']);

        this.props.dispatch( getRssLS() );
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    inputOnChenge( value ) {
        this.setState({ inputText: value });
    }

    addRssUrl() {
        const { arrayRss } = this.props.rss;
        this.props.dispatch( addRss(arrayRss, this.state.inputText));
        this.setState({ inputText: '' });
    }

    deleteRssItem(delrssItem) {
        this.props.dispatch(deleteRss(delrssItem));
    }

    save() {
        const { arrayRss } = this.props.rss;

        LS.set('arrayRss', arrayRss);
    }

    renderRssList(item, idx) {
        return (
            <li key={idx} className="rss-item">
                <span>{item.rssUrl}</span>
                <button className="btn btn-primary btn-xs right" onClick={this.deleteRssItem.bind('', item)}><i className="glyphicon glyphicon-remove"/></button>
            </li>
        );
    }

    render() {
        const { inputText } = this.state;
        const { arrayRss } = this.props.rss;

        LS.set('arrayRss', arrayRss);

        return (
            <div>
                <div className="modal-body">
                    <ul className="rss-list">
                        { arrayRss.length !== 0 ? arrayRss.map(this.renderRssList) : 'No items' }
                    </ul>
                    <Input onChange={ this.inputOnChenge } value={ inputText }  />
                    <button className="btn btn-primary" onClick={this.addRssUrl}>Add RSS URL</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

ImportModal.propTypes = {
    rss: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        rss: state.rss
    };
}

export default connect(mapStateToProps)(ImportModal);
