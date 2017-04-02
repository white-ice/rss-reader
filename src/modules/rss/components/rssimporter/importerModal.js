import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LS from '../../../../utils/Localstorage';

import Input from '../../../../components/ui/input/Input';
import {closeModal} from '../../../../components/modal/index';
import '../../Rss.scss';

class ImporterModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            arrayRssUrl: this.props.arrayRssUrl,
            error: this.props.error
        };
    }

    inputOnChenge( value ) {
        this.setState({ inputText: value });
    }

    addRssUrl() {
        const {inputText, arrayRssUrl} = this.state;

        let id = 1;

        if (arrayRssUrl.length) {
            id = arrayRssUrl[arrayRssUrl.length - 1].id + 1;
        }

        arrayRssUrl.push({
            id: id,
            rssUrl: inputText
        });

        this.setState({
            arrayRssUrl: arrayRssUrl,
            inputText: ''
        });
    }

    deleteRssItem(item) {
        const {arrayRssUrl} = this.state;

        const filteredArrayRss = arrayRssUrl.filter(rss => rss.id !== item.id);

        this.setState({
            arrayRssUrl: filteredArrayRss
        });
    }

    save() {
        const { arrayRssUrl } = this.state;

        LS.set('arrayRssUrl', arrayRssUrl);

        this.close();

        window.location.reload();
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    renderRssList(item, idx) {
        return (
            <li key={idx} className="rss-item">
                <span>{item.rssUrl}</span>
                <button className="btn btn-primary btn-xs right" onClick={this.deleteRssItem.bind(this, item) }>
                    <i className="glyphicon glyphicon-remove"/>
                </button>
            </li>
        );
    }

    render() {
        const { inputText, arrayRssUrl } = this.state;

        return (
            <div>
                <div className="modal-body">
                    <ul className="rss-list">
                        { arrayRssUrl.length ? arrayRssUrl.map(::this.renderRssList) : 'No items' }
                    </ul>
                    <Input onChange={ ::this.inputOnChenge } value={ inputText }  />
                    <button className="btn btn-primary" onClick={::this.addRssUrl}>Add RSS URL</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={ ::this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

ImporterModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
    arrayRssUrl: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ImporterModal);
