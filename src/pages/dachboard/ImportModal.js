import React, {Component, PropTypes} from 'react';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import { LS } from '../../utils/index';
import {closeModal} from '../../components/modal/index';
import Input from '../../components/ui/input/Input';
import {addRss, getTodos} from './actions';

class ImportModal extends Component {
    static propTypes = {
        rss: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };

        bindAll(this, ['close', 'inputOnChenge', 'addRssUrl', 'renderRssList']);

        this.props.dispatch( getTodos() );
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

    renderRssList(item, idx) {
        return (
            <li key={idx}>
                <span>{item.rssUrl}</span>
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
                    {/*<button type="button" className="btn btn-default" onClick={ this.close }>Закрыть</button>*/}
                    <button type="button" className="btn btn-success" onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rss: state.rss
    };
}

export default connect(mapStateToProps)(ImportModal);
